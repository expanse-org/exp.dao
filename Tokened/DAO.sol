pragma solidity ^0.4.8;

import "./Common.sol"
import "./Registrar.sol";

contract DAO is Common {
// the president, this account can cast tie breaking votes in the event the number of whitelisted addresses is even.

  Registrar vReg;

  // number of voters
  uint public proposalCost;
  // uint public nWhitelist;
  uint public nProposals;
  // max amount of money that can be requested
  uint public maxRequest;
  // consensusTarget could be determined by the type of proposal
  // 51%, 66%, 75%, 100%
  uint public consensusTarget;
  // Increase granularity by multiplying numOfVotes via multiples of 10
  // (numOfVotes * 100) / maxVotes = 51
  // (numOfVotes * 1000) / maxVotes = 510

  struct Proposal{
    address owner;
    address receiver;

    string title;
    string description;

    bool active;
    bool pass;
    bool paid;

    uint yesVotes;
    uint noVotes;

    uint startTime;
    uint endTime;

    uint amount;

    mapping(address=>bool) votes;
  }

  struct Stake {
    uint balance;
    uint maturity;
  }

  //proposals
  mapping(bytes32=>Proposal) public proposals;
  mapping(address=>Stake) public stakes;

/************************************************/
/* Permissions                                  */
/************************************************/

  modifier onlyRootOrWhitelist(){
    if(msg.sender == root || vReg.getVerified(msg.sender) == true){
      _;
    }else{
      throw;
    }
  }

  modifier onlyRootOrOwner(address _id){
    if(msg.sender == root || proposals[_id].owner == msg.sender){ _;}else{throw;}
  }

/************************************************/
/* Constructor Function                         */
/************************************************/

  function DAO(){
    root = msg.sender;
    proposalCost = 1000 eth; // 10 EXP
  }

/************************************************/
/*        Proposal Stuff                        */
/************************************************/
/*
  - Proposals cost 1000 VOTES to create.
  - Should the proposal cost depend on how much the person is asking for?
  - proposals pass if yes votes out number no votes
  - votes are locked for a week after each vote, or for the duration
  - voting mints new VOTES which gives you more influence on future votes.
*/
  function createProposal(string _title, string _description, address _receiver, uint _amount) onlyRootOrWhitelist returns(bool, bytes32){
    // proposals have a vote cost.
    if(bal.getBalance(msg.sender) < proposalCost){throw;}

    bal.decBalance(msg.sender, proposalCost);
    bal.decTotalSupply(proposalCost);

    bytes32 id = sha3(_title, now);

    if(proposals[id].active == true){throw;}

    proposals[id].owner = msg.sender;
    proposals[id].receiver= _receiver;

    proposals[id].active = true;

    proposals[id].title = _title;
    proposals[id].description = _description;

    proposals[id].nVotes = 0;
    proposals[id].startTime = now;
    proposals[id].endTime = now + 14 days;

    if(_amount > maxRequest || _amount == 0){
      _amount = maxRequest;
    }
    proposals[id].amount = _amount;

    nProposals++;

    return (true,id);

  }

  function voteProposal(bytes32 _id, bool _yes) returns(bool){
    if(proposals[_id].active == false){throw;}
    if(proposals[_id].votes[msg.sender] == true){throw;}

    uint uVotes = bal.getBalance(msg.sender);

    proposals[_id].votes[msg.sender] = true;
    proposals[_id].nVotes+=uVotes;

    if(_yes == true){
      proposals[_id].yesVotes++;
    }else{
      proposals[_id].noVotes++;
    }

    // incentivize votes by minting new votes here
    // lock current balance up for two weeks
    stakes[msg.sender].balance = uVotes;
    stakes[msg.sender].maturity = now + 2 weeks;

    bal.decBalance(msg.sender, uVotes);

    return true;

  }

  function cancelProposal(bytes32 _id) onlyRootOrOwner {
    proposals[_id].active = false;
  }

  function finalizeProposal(bytes32 _id) onlyRootOrOwner returns(bool){


    if(proposals[_id].noVotes < proposals.yesVotes){
      throw;
    }

    if(proposals[_id].active == false){throw;}

    // update proposal
    proposals[_id].active = false;
    proposals[_id].pass = true;
    proposals[_id].paid = true;

    proposals[_id].endTime = now;
    // send funds
    if(!proposals[_id].receiver.send(proposals[_id].amount)){
      throw;
    }

    return true;
  }

/************************************************/
/* Minting                                      */
/************************************************/
/*
  - When a user votes, their balance is locked for 1 weeks
  - After 1 week, the person can mint new votes
  - newVotes = votes.balance * 1.0025
*/

function mint() returns(bool){
  if(stakes[msg.sender].expiration > now){
    throw;
  }

  //mint new tokens.
  // 0.50% per 2 weeks, or 1% per month
  uint nMint = stakes[msg.sender].balance + (stakes[msg.sender].balance / 200);
  stakes[msg.sender].balance = 0;
  stakes[msg.sender].expiration = 0;
  bal.incBalance(msg.sender, uMint);
  bal.incTotalSupply(nMint);

  return true;

}

/************************************************/
/************************************************/
/************************************************/

  function setConsensusTarget(uint _target) onlyRoot {
    consensusTarget = _target;
  }

  function setMaxRequest(uint _max) onlyRoot {
    maxRequest = _max;
  }

}

pragma solidity ^0.4.8;

import "./Common.sol"
import "./Registrar.sol";

contract DAO is Common {
// the president, this account can cast tie breaking votes in the event the number of whitelisted addresses is even.

  Registrar vReg;

  // number of voters
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

    uint nVotes;

    uint startTime;
    uint endTime;

    uint amount;

    mapping(address=>bool) votes;
  }

  //proposals
  mapping(bytes32=>Proposal) public proposals;

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
  }

/************************************************/
/* Whitelisting Voters                          */
/************************************************/
// TODO: Externalize the voter registration proccess
// TODO: Democratize the whitelisting proccess, voters vote for representatives that can come here, and they have a TTL
// How to get whitelisted
// 1. root account
// 2. Be willing to lock up 1000->10000 EXP for n amount of years
/*
  function setWhitelist(address _addr, bool _set) onlyRootOrAdmin returns(bool){
    //whitelist[_addr] = _set;
    return true;
  }
*/
/************************************************/
/*        Proposal Stuff                        */
/************************************************/
  function createProposal(string _title, string _description, address _receiver, uint _amount) onlyRootOrWhitelist returns(bool, bytes32){
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

  function voteProposal(bytes32 _id) onlyRootOrWhitelist returns(bool){
    if(proposals[_id].active == false){throw;}
    if(proposals[_id].votes[msg.sender] == true){throw;}

    proposals[_id].votes[msg.sender] = true;
    proposals[_id].nVotes++;

    return true;

  }

  function cancelProposal(bytes32 _id) onlyRootOrOwner {
    proposals[_id].active = false;
  }

  function finalizeProposal(bytes32 _id) onlyRootOrOwner returns(bool){

    uint numOfVotes = proposals[_proposal].nVotes;
    uint consensus = (numOfVotes * 1000) / nWhitelist;

    if(consensus<consensusTarget){
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
/************************************************/
/************************************************/

  function setConsensusTarget(uint _target) onlyRoot {
    consensusTarget = _target;
  }

  function setMaxRequest(uint _max) onlyRoot {
    maxRequest = _max;
  }

}

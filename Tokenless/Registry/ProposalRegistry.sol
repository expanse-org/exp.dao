pragma solidity ^0.4.8;

contract ProposalRegistry {
// ADMIN
  address public root;
  mapping(address=>bool) public admin;

  struct Proposal{
    uint id;

    address owner;

    string title;
    string description;

    bool active;
    bool pass;

    uint nVotes;
    uint nVotesNeeded;
  }
  // proposals[AdminAddress][ProposalAddress].var
  mapping( address => mapping( address => bool ) ) public proposals;
  // votes[ProposalAddress][VoterAddress]

  modifier() onlyRoot{
    if(msg.sender == root){
      _;
    }else{
      throw;
    }
  }

  modifier() onlyRootOrAdmin{
    if(msg.sender == root || admin[msg.sender] == true){
      _;
    }else{
      throw;
    }
  }
// VOTER FUNCTIONS
  function setProposal(address _addr, bool _set) onlyRootOrAdmin returns(bool){
    proposal[_addr] = _set;
    return true;
  }

  function getProposal(address _addr) returns(bool){
    return proposal[_addr];
  }
// ADMIN FUNCTIONS
  function setAdmin(address _addr, bool _set) onlyRoot returns(bool){
    admin[_addr] = _set;
    return true;
  }

  function getAdmin(address _addr) returns(bool){
    return admin[_addr];
  }
}

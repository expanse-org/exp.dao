pragma solidity ^0.4.8;

contract VoterRegistry {
  address public root;

  uint public nVoters;

  mapping(address=>bool) public admin;

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
  function setVote(){

  }

  function getVote(){

  }
// ADMIN FUNCTIONS
  function setAdmin(address _addr, bool _set) returns(bool){
    admin[_addr] = _set;
    return true;
  }

  function getAdmin(address _addr) returns(bool){
    return admin[_addr];
  }
}

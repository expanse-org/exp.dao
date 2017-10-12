pragma solidity ^0.4.8;

import"./Common.sol";

contract VoterRegistry is Common {

  uint public nVoters;
  uint public nVerified;

  mapping(address=>bool) public voter;
  mapping(address=>bool) public verified;

  function (){
    throw;
  }
// VOTER FUNCTIONS
  function setVoter(address _addr, bool _set) onlyRootOrAdmin returns(bool){
    voter[_addr] = _set;
    return true;
  }

  function getVoter(address _addr) returns(bool){
    return voter[_addr];
  }

  function setVerified(address _addr, bool _set) onlyRootOrAdmin returns(bool){
    verified[_addr] = _set;
    return true;
  }

  function getVerified(address _addr) returns(bool){
    return verified[_addr];
  }
// ADMIN FUNCTIONS
  function setAdmin(address _addr, bool _set) returns(bool){
    admin[_addr] = _set;
    return true;
  }

  function getAdmin(address _addr) returns(bool){
    return admin[_addr];
  }
// Number of Voters
  function getVoters() returns(uint){
    return nVoters;
  }

  function incVoters() returns(uint){
    nVoters++;
    return nVoters;
  }

  function decVoters() returns(uint){
    nVoters--;
    return nVoters;
  }

  function getVerifieds() returns(uint){
    return nVerified;
  }

  function incVerified() returns(uint){
    nVerified++;
    return nVerified;
  }

  function decVerified() returns(uint){
    nVerified--;
    return nVerified;
  }
}

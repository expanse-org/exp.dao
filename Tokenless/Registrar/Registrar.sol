//TODO:
// CREATE EVENTS

pragma solidity ^0.4.8;

import "./Common.sol";
import "./VoterRegistry.sol";
import "./Admin.sol";

contract Registrar is Common, Admin {

  event Registered();
  event Verified();
  event Voted();
  event Redeemed();

  // ADMIN EVENTS

  VoterRegistry vRegistry;

  uint public retainerFee;
  uint public retainerLength;

  mapping(address=>uint) public deposits;
  mapping(address=>uint) public expiration;

  /************************************************/
  /* Constructor                                  */
  /************************************************/
  function Registrar(){
    root = msg.sender;
    retainerFee = 1000 ether;
    retainerLength = 365 days;
  }
  /************************************************/
  /* User Functions                               */
  /************************************************/
  function () payable {
    register();
  }

  function register() payable returns(bool){
    if(msg.value != retainerFee){throw;}
    expiration[msg.sender] = now + retainerLength;
    deposits[msg.sender] = msg.value;
    //set voter true
    vRegistry.setVoter(msg.sender, true);
    vRegistry.incVoters();
  }

  function verify() onlyRootOrAdmin returns(bool){
    //set voter true
    vRegistry.setVerfied(msg.sender, true);
    vRegistry.incVerified();
    return true;
  }

  function redeem() returns(bool){
    if(expiration[msg.sender] < 1 || expiration[msg.sender] > now ){throw;}

    uint send = deposits[msg.sender];

    expiration[msg.sender] = 0;
    deposits[msg.sender] = 0;

    vRegistry.setVoter(msg.sender, false);
    vRegistry.decVoters();

    if(!msg.sender.send(send)){
      throw;
    }

    return true;
  }

  function getVoter(address _addr) returns(bool){
    return vRegistry.getVoter(_addr);
  }

  function getVerified(address _addr) returns(bool){
    return vRegistry.getVerified(_addr);
  }

}

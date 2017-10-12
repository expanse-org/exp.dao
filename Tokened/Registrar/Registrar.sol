//TODO:
// CREATE EVENTS

pragma solidity ^0.4.8;

import "./Common.sol";
import "./Admin.sol";

import "./Balance.sol";

contract Registrar is Common, Admin {

  event Registered();
  event Verified();
  event Voted();
  event Redeemed();

  // ADMIN EVENTS

  //VoterRegistry vRegistry;
  Balance public bal;

  address public DAO;

  uint public retainerFee;
  uint public retainerLength;

  /************************************************/
  /* Constructor                                  */
  /************************************************/
  function Registrar(){
    root = msg.sender;
    Divisor = 100;

    bal = Balance();
  }
  /************************************************/
  /* User Functions                               */
  /************************************************/
  function () payable {
    register();
  }

  function register() payable returns(bool){
    if(msg.value == 0){throw;}

    //send money to dao contract
    if(!DAO.send(msg.value)){
      throw;
    }
    //update the voters, vote balance
    uint votes = msg.value * rate;

    bal.incBalance(msg.sender, votes);
    bal.incTotalSupply(votes);

    return true;
  }

  function redeem() returns(bool){
    return true;
  }

  function getVoter(address _addr) returns(uint){
    return true;
  }

}

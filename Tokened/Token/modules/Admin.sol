\// Presale
// Any account with admin priveldges can trigger the mint tokens function
pragma solidity ^0.4.8;

import "./Balances.sol";
import "./SafeMath.sol";
import "./PriceOracle.sol";


contract Admin is SafeMath {

  event Mint(address indexed User, string Action, uint Amount, uint Rate);
  event AdminMint(address indexed User, string Action, string Coin, string TXID, uint USD, uint Tokens);
  event MoveLab(address indexed User, uint Amount);
  event AdminMoveLab(address indexed FromUser, address indexed ToUser, uint Amount);

  address public root; // address that creates the contract
  address public payout; // address that recieves the ico payout

  uint public startTime; // when the ico starts
  uint public endTime; // when the ico ends
  uint public cost; // exchange rate (not in wei)
  uint public limit;

  bool public isFinalized;

  Balances public balances;
  Balances public test_balances;

  PriceOracle public prices;

  mapping(address=>bool) public admins;

  modifier onlyRoot(){
    if(root == msg.sender){ _ ;} else { throw; }
  }

  modifier onlyRootOrAdmin(){
    if(root == msg.sender || admins[msg.sender] == true){ _ ;} else { throw; }
  }

  function Admin(){


      startTime = block.timestamp;

      endTime = startTime + (365 days);


    root = 0x6a620a92Ec2D11a70428b45a795909bd28AedA45;
    payout = 0x15656715068aB0dBdF0AB00748a8A19e40F28192;
    cost = 9;
    limit = 100000000 ether;

    balances = Balances(0x9c3ef85668f064ed75a707a9fef00ed55bab01f5);
    test_balances = Balances(0x8d0a2a6c210652c0607a14f9f3f568c8c45073fe);
    prices = PriceOracle(0xb7de3e99b4baf03b24e32394858ee4a3d8ca1087);

  }

  function () payable {
    throw;
  }

  // OTHER CURRENCIES
  // _usdValue == $xx.xx * 100
  function adminCreateTokens(address _receiver, string _coin, string _txid, uint _usdValue) payable onlyRoot returns(bool){

    //if (now < startTime || now > endTime) {throw;}

    // dollar amount in cents EX. $25 == 2500
    // convert cents into 2500.000000000000000000 for accuracy
    uint usd = (_usdValue * 1 ether);

    // $25.00 / ($0.09) == 277.7778
    // 2500 / 9 = 277.7778
    uint tokens = usd/cost;

    if((tokens + balances.getTotalSupply()) > limit){throw;}

    balances.incBalance(_receiver, tokens);
    balances.incTotalSupply(tokens);

    AdminMint(_receiver, "offchain-contribution", _coin, _txid, usd, tokens);

    return true;
  }

  function moveBal(address _from, address _to) onlyRoot returns(bool){
      //if (now < startTime || now > endTime) {throw;}

      uint bal = balances.getBalance(_from);
      balances.decBalance(_from, bal); //umpty old bal
      balances.incBalance(_to, bal); // update new balance

      AdminMoveLab(_from, _to, bal);
      return true;
  }

  function moveTestFunds(address _addr) onlyRootOrAdmin returns(bool){
      //if (now < startTime || now > endTime) {throw;}

        uint tb = test_balances.getBalance(_addr); // get old balance

        balances.incBalance(_addr, tb); // update new balance
        balances.incTotalSupply(tb); // update total supply new balance

        //zero out old balance
        test_balances.decBalance(_addr, tb);

        //trigger event
        MoveLab(_addr, tb);

        return true;
  }

//when eth watcher oracle see's this event subtract that balance from the acct
  function moveEthBal(address _receiver, uint _amount, string _txid) onlyRootOrAdmin returns(bool){

    balances.incBalance(_addr, _amount); // update new balance
    balances.incTotalSupply(_amount); // update total supply new balance

    AdminMint(_receiver, "eth-lab-swap", "ETH", _txid, 0, _amount);
  }

  function empty(address _sendTo) onlyRoot { if(!_sendTo.send(this.balance)) throw; }
  function kill() onlyRoot { selfdestruct(root); }
  function transferRoot(address _newOwner) onlyRoot { root = _newOwner; }

}

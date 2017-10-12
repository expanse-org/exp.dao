pragma solidity ^0.4.8;
// Single Token
// price == price * 1 ether
contract PriceOracle {

  address public root;

  string public token;
  uint public price;
  uint public lastPrice;
  uint public lastUpdated;

  event Updated(address Admin, uint Price, uint LastPrice, uint LastUpdated);

  modifier onlyRoot(){
    if(root == msg.sender){ _ ;} else { throw; }
  }

  modifier onlyAdmin(){
    if(root == msg.sender || admins[msg.sender] == true){ _ ;} else { throw; }
  }

  mapping(address=>bool) public admins;

  function PriceOracle(uint _price){
    root = msg.sender;
    price = (_price * 1 ether);
    lastPrice = price;
  }

  function(){
    throw;
  }

// maybe price should be the average of last price and this price?
  function getPrice() returns(uint){
    return (price);
  }

  function getLastPrice() returns(uint){
    return (lastPrice);
  }

  function getAvgPrice() returns(uint){
    return ((price+lastPrice)/2);
  }
// Rate is a whole number that will be turned into a percent
// EX 8 == 0.08 == 8%
  function getConversion(uint _rate) returns(uint){
    return( price / _rate );
  }

//price will be sent in cents and convertd to wei
  function setPrice(uint _price) onlyAdmin() returns(bool){
    lastPrice = price;
    price = (_price * 1 ether);
    lastUpdated = block.timestamp;
    //event
    Updated(msg.sender, _price, lastPrice, lastUpdated);
    //return
    return true;
  }

  function setAdmin(address _admin, bool _set) onlyRoot() returns(bool){
    admins[_admin] = _set;
    return true;
  }
}

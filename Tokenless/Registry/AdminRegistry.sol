contract AdminRegistry {

  mapping(address=>address) public root;
  // admin[contract][address]
  mapping(address=>mapping(address=>bool)) public admin;

  modifier onlyRoot(){
    if(msg.sender == root[this]){
      _;
    }else{
      throw;
    }
  }

  function AdminRegistry(){
    root[this] = msg.sender;
  }

  function newRoot(address _contract, address _addr) returns(bool){
    if(root[_contract]){throw;}
    root[_contract] = _addr;
    return true;
  }

  function setAdmin(address _contract, bool _set, address _addr) onlyRoot returns(bool){
    admin[_contract][_addr] = _set;
    return true;
  }

  function transferRoot(address _contract, address _to) onlyRoot returns(bool success){
    root[_contract] = _to;
    return true;
  }

  function empty() onlyRoot { if(!root[this].send(this.balance)) throw; }
  function kill() onlyRoot { selfdestruct(root[this]); }
}

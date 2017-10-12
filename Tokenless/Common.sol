contract Common {
  address public root;

  mapping(address=>bool) public admin;

  modifier onlyRoot(){
    if(msg.sender == root){
      _;
    }else{
      throw;
    }
  }

  modifier onlyRootOrAdmin(){
    if(msg.sender == root || admin[msg.sender] == true){
      _;
    }else{
      throw;
    }
  }

  function setAdmin(bool _set, address _addr) onlyRoot returns(bool){
    admin[_addr] = _set;
    return true;
  }

  function transferRoot(address _to) onlyRoot returns(bool success){
    root = _to;
    return true;
  }

  function empty() onlyRoot { if(!root.send(this.balance)) throw; }
  function kill() onlyRoot { selfdestruct(root); }

}

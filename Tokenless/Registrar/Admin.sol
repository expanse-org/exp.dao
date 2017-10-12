contract Admin {
  function setVoter(adress _addr, string _txid, bool _set) onlyRoot returns(bool){
    expiration[_addr] = 0;
    deposits[_addr] = 0;
    //set voter true
    vRegistry.setVoter(_addr, true);
    vRegistry.incVoters();

    returns true;
  }

  function setRegistry(address _reg) onlyRoot returns(bool){
     vRegistry = VoterRegistry(_reg);
     return true;
  }

  function setRetainerFee(uint _fee) onlyRoot returns(bool){
    retainerFee = _fee * 1 ether;
    return true;
  }

  function setRetainerLength(uint _days) onlyRoot returns(bool){
    retainerLength = _days * 1 days;
    return true;
  }
}

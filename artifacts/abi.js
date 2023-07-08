module.exports = {
  abi: [
    // view methods
    'function totalSupply() view returns (uint totalSupply)',
    'function balanceOf(address who) view returns (uint balance)',
    'function allowance(address owner, address spender) view returns (uint allowance)',

    // transaction methods
    'function transfer(address to, uint value)',
    'function transferFrom(address from, address to, uint value)',
    'function approve(address spender, uint value)',
    'function mint(uint256 amount)',
    'function withdraw()',

    // events
    'event Transfer(address indexed from, address indexed to, uint value)',
    'event Approval(address indexed owner, address indexed spender, uint value)'
  ],
  networks: {
    // 4: '0xD92E713d051C37EbB2561803a3b5FBAbc4962431',
    5: '0x5a94Dc6cc85fdA49d8E9A8b85DDE8629025C42be'
  }
};

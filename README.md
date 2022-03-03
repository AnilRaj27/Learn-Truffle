# Learn-Truffle
This repo contains hello world smart contracts used for practicing truffle env console interaction, testing and deployment.

## Truffle Notes
[Notes](https://github.com/AnilRaj27/Learn-Truffle/blob/main/truffle-notes.pdf)

Extra points:
1. Send transaction to a contract address, and receive function collects eth/wei
    *  `instance.sendTransaction({value:1, from:accounts[1], to: instance.address})`
2. If you want to set different account and call a contract
    *  `instance2 = await ContractName.new({from: accounts[2]})`
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'dwarf glass wagon purse liquid reason trouble acquire enlist admit expect narrow',
  'https://goerli.infura.io/v3/e847e4c3d3884b38bdb5be03b5b42b2e'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account: ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there'] })
    .send({ gas: 1000000, from: accounts[0] });

  console.log('Contract deployed to: ', result.options.address);
  provider.engine.stop();
};
deploy();

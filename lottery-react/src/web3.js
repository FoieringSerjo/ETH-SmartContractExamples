import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || 'https://goerli.infura.io/v3/');

export default web3;

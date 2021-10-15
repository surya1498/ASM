const path = require("path");

const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "localhost",
      network_id: "*",
      port: 9545,
    },
    bsctestnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://data-seed-prebsc-1-s1.binance.org:8545`
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    bscmainnet: {
      provider: () =>
        new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    matictestnet: {
      provider: () =>
        new HDWalletProvider(mnemonic, `https://rpc-mumbai.matic.today`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 300,
      skipDryRun: true,
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          "https://ropsten.infura.io/v3/7477dde235a14bb389654fb37ff948d6"
        );
      },
      network_id: 3,
      confirmations: 2,
      timeoutBlocks: 300,
      skipDryRun: true,
      
    
    },
  },
  compilers: {
    solc: {
      version: "^0.8.7",
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200,
        },
      },
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: '3WFYZTDS9XY5BQIXDFK7XND28XD9Q6EN7S'
  }
};

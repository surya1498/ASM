var AsToken = artifacts.require("./AsToken.sol");

module.exports = async function(deployer) {
  await  deployer.deploy(AsToken);
  const myToken = await AsToken.deployed()

};

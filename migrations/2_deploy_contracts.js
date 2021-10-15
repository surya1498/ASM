var FFPToken = artifacts.require("./FFP.sol");

module.exports = async function(deployer) {
  try{
    console.log('deploying FFP contract')
    await  deployer.deploy(FFPToken,{nonce:25,gasPrice: web3.utils.toWei("10", "gwei"),
  });
    const myToken = await FFPToken.deployed();
    console.log(myToken)
  }
  catch(err){
    console.log(err)
  }
  

};

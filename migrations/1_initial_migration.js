var Migrations = artifacts.require("../contracts/Migrations.c");
var ERC20 = artifacts.require("../contracts/Erc20.c")

module.exports = function (deployer) {
  deployer.deploy(Migrations).then(function () {
    return deployer.deploy(ERC20, "1000000", "bitcoin", "BTC")
  }).then(function (instance) {
    deploy = instance;
    return deploy.GetTotalSupply()
  }).then(function (totalSupply) {
    console.log("totalSupply", totalSupply.toString());
    return deploy.GetDecimals();
  }).then(function (decimals) {
    console.log("decimals", decimals.toString());
    return deploy.GetTokenName();
  }).then(function (tokenName) {
    console.log("tokenName", tokenName);
    return deploy.GetAmount("0x122369f04f32269598789998de33e3d56e2c507a")
  }).then(function (balance) {
    console.log("balance", balance.toString());
  })
};

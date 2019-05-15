var Migrations = artifacts.require("../contracts/Migrations.c");

module.exports = function (deployer) {
  // Deploy the Migrations contract as our only task
  deployer.deploy(Migrations)
};

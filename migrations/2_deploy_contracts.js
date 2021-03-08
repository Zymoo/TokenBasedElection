var ElectionToken = artifacts.require("ElectionToken");
var CrowdSale = artifacts.require("CrowdSale");
var Election = artifacts.require("Election");

module.exports = async function(deployer) {
  const tokenPrice = 1000000000000000;
  await deployer.deploy(ElectionToken, 1000000);
  await deployer.deploy(CrowdSale, ElectionToken.address, tokenPrice);
  await deployer.deploy(Election, ElectionToken.address, CrowdSale.address);
};
var ElectionToken = artifacts.require("./ElectionToken.sol");
var CrowdSale = artifacts.require("./CrowdSale.sol");

module.exports = function(deployer) {
  deployer.deploy(ElectionToken, 1000000).then(function() {
    var tokenPrice = 1000000000000000;
    return deployer.deploy(CrowdSale, ElectionToken.address, tokenPrice);
  });
};
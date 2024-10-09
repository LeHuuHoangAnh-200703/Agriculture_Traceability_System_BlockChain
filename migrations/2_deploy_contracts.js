// const ProductTraceability = artifacts.require("ProductTraceability");
// const Test = artifacts.require("Test");
const Test01 = artifacts.require("Test01");

module.exports = function (deployer) {
  deployer.deploy(Test01);
};

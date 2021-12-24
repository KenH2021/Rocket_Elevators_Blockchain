var RocketElevator = artifacts.require("RocketElevator");

module.exports = function(deployer) {
  deployer.deploy(RocketElevator, "RocketElevator","RE","ipfs://QmVgmrLHxJdhe9tg6c5de34rdWZRyEttj9F6dnYWNuupkC/","ipfs://QmT9xyRGWN1vXCNtr7neivyMR8KrFnzxt91kC5s9tiws3M/hidden.json");
};
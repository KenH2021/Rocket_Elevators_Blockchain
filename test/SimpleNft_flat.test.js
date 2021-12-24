const SimpleNft = artifacts.require("RocketElevator");
contract("SimpleNft-flat", (accounts) => {
    let simple;
    before(async () => {
        simple = await SimpleNft.deployed();
    });
    it ("should deploy properly", async() =>{
        console.log("Address :" + simple.address);
        assert(simple.address !== '');
    });
    it ("should deploy properly", async() =>{
        console.log("tokenID :" + simple.tokenId);
        assert(simple.tokenId !== '');
    });
});
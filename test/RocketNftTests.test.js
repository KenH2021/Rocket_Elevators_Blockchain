const RocketElevator = artifacts.require("RocketElevator");

contract("RocketElevator", accounts => {
    before(async() => {
        contract = await RocketElevator.deployed()
    })

    describe('the contract', async() => {
        it('deploys successfully', async() => {
            const address = contract.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })
        it('has the RocketElevator name', async() => {
            const name = await contract.name()
            assert.equal(name, "RocketElevator")
        })
        it("has the correct maximum of nft's", async() => {
            const maxSupply = await contract.maxSupply()
            assert.equal(maxSupply, 1000)
        })
        it("Max mint amount is 10", async() => {
            const maxMintAmount = await contract.maxMintAmount()
            assert.equal(maxMintAmount, 10)
        })
        it("has the right symbol", async() => {
            const symbol = await contract.symbol()
            assert.equal(symbol, "RE")
        })
        it("has the correct URI for unrevealed NFT's", async() => {
            const notRevealedUri = await contract.notRevealedUri()
            assert.equal(notRevealedUri, "ipfs://QmT9xyRGWN1vXCNtr7neivyMR8KrFnzxt91kC5s9tiws3M/hidden.json")
        })
        it("is not revealed yet (should fail after the 27th of dec 2021 at 1pm)", async() => {
            const revealed = await contract.revealed()
            assert.equal(revealed, false)
        })
    })

    // describe('minting', async () => {
    //     it('creates a new token', async () => {
    //       const result = await contract.mint(1);
    //     //   const totalSupply = await contract.totalSupply();
    
    //     //   // SUCCESS
    //     //   const event = result.logs[0].args;
    //     //   assert.equal(totalSupply, 1, 'supply is OK');
    //     //   assert.equal(event.tokenId.toNumber(), totalSupply - 1, 'token id is OK');
    //     //   assert.equal(
    //     //     event.from,
    //     //     '0x0000000000000000000000000000000000000000',
    //     //     'from address is OK'
    //     //   );
    //     //   assert.equal(event.to, accounts[0], 'to address is OK');
    
    //     //   // FAILURE : cannot mint same color twice
    //     //   await contract.mint('#dc143c').should.be.rejected;
    //     });
    //   });

})
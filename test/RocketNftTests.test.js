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
        it("has a symbol", async() => {
            const symbol = await contract.symbol()
            assert.equal(symbol, "RE")
        });
        it("has the correct URI for unrevealed NFT's", async() => {
            const notRevealedUri = await contract.notRevealedUri()
            assert.equal(notRevealedUri, "ipfs://QmT9xyRGWN1vXCNtr7neivyMR8KrFnzxt91kC5s9tiws3M/hidden.json")
        })
        describe('Sales end date', async() => {
            it('exists', async() => {
                const endDate = await contract.salesEndDates()
                assert.ok(endDate)
            })
            it('set to the right date', async() => {
                const endDate = await contract.salesEndDates()
                assert.equal(endDate, 1641218400)
            })
        });
        describe('collection', async () => {
            it('is not revealed', async() => {
                const revealed = await contract.revealed()
                assert.equal(revealed, false)
            })
            it('sale is paused', async() => {
                const paused = await contract.paused()
                assert.equal(paused, true)
            })
        })
    })
})

const config = require('./public/config/config.json');
console.log(config);

describe('Config', () => {
    it('exists', () => {
        expect(config).not.toBeUndefined();
    });
    describe('parameters for config', () => {
        it('has the right contract address', () => {
            expect(config.CONTRACT_ADDRESS).toBe('0x599C5926362BDa9AC433b16eB3aF165d0bc1D237');
        });
        it('has the right nft name', () => {
            expect(config.NFT_NAME).toBe('RocketElevator');
        });
        it('has the right symbol', () => {
            expect(config.SYMBOL).toBe('RE');
        });
        it('has a max supply of 1000', () => {
            expect(config.MAX_SUPPLY).toBe(1000);
        });
        it('has the right display cost', () => {
            expect(config.DISPLAY_COST).toBe(0.01);
        });
        it('has the right marketplace', () => {
            expect(config.MARKETPLACE).toBe('Opensea');
        });
        it('has the right marketplace link', () => {
            expect(config.MARKETPLACE_LINK).toBe('https://testnets.opensea.io/collection/rocketelevator-v2');
        });
        it('contains a network object', () => {
            expect(config.NETWORK).not.toBeUndefined();
        });
        describe('network object', () => {
            const network = config.NETWORK;
            it('has the right name', () => {
                expect(network.NAME).toBe('Rinkeby');
            });
            it('has the right symbol', () => {
                expect(network.SYMBOL).toBe('Rinkeby TestETH');
            });
        });
    });
});
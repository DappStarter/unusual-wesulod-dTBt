require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth talk purpose install gloom suit gesture'; 
let testAccounts = [
"0xa3a203c0b13b6a4f967456587b16dc74be43960fea681d162a7daee5df21a13d",
"0x1a781079e7cf637d6591ed2c5da794dd312ce1ff44742c8a19bc748e5ce19509",
"0x1804f7f4a9773824b8c1dfbad1b1e87d34886d03e6ec9fe56de0fda7b25fb7b2",
"0xaff930afb24fb0018f810fd7932dfe06290ce4aa294311340a88c6905de951a7",
"0x87c2c161e43b26b23096a0c76660f4d19c36e16169dc812c59ace35800b27f67",
"0x6bc3e0e9f55453b1503c5bc15fc86f2c4ccc402b257a6c6fdb00c7c75d69bd88",
"0x9bb412106269a91a5f07f207298f03be970e09ec65f3b41e50e6128d0e4c04c1",
"0x29db01ef0d75f49a179c014e2455991eada1b6b1cf42d3339aa33196b0a95460",
"0x4ff914eafc4fee1d1757ad1ae98c780ab39868d62df07fb0f1a6ffc59d29178e",
"0x72a0d3d6daa585cc95c8b7158377c9c7f3e844aaac7381318839270e936a618e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



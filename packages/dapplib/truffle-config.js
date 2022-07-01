require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid arena occur venture stool cruise oil pulp gentle light army giggle'; 
let testAccounts = [
"0xb0ee5974156d3bdf152bf79228c55cfb1f98350f9ec51026701b486d7e10f595",
"0x67282352792c1a8eea010ce56c0f9c3ca40bf73bc341e0484af19187318e93c9",
"0x845107a0453eceed651f3ffed9db78b84e2da2809cc0c8a2b341bb93be62dfc9",
"0xe8c50253f5f02390eacf86e7741b493a7a129f651b9f16138495f28f3c4495ef",
"0xa9b911ad194f488c821132f999bd5ba37c561c4f332431d10bf894a802b5187c",
"0xe7693e9a113cc7a14b4c733895e874e77a4d63f1b09f9a3fab93e7f3ccbd7561",
"0x1612b1ff4587d68fa3712bce2ba34d36a477c2cf937e1ea9b48ccfeaf0cf3828",
"0x62617633b18d4f8d86dbbb3012a132f513822ecb9e31405e4ec304e256a2d46f",
"0x82f280d2c3f6fe48983202021e34f27f09c7c663492852a9fc36467c837d4356",
"0x338c975e3216d60bd27a2233ccb9138da84b23555979b5db99903f91eae17c3f"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



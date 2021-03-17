/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('truffle-hdwallet-provider');
// const infuraKey = "fj4jll3k.....";

// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      gas: 7000000,           // Gas sent with each transaction (default: ~6700000)
      gasPrice: 80000000000  // 20 gwei (in wei) (default: 100 gwei)
    },

    huobi: {
      host: "huobichain-dev-01.sinnet.huobiidc.com",     // Localhost (default: none)
      port: 8001,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      from: "0xB95a8dbB263EF5FBAF07d0577ec8738b0B35751E"
    },

    mainnet: {
      host: "http-mainnet-node.huobichain.com",     // Localhost (default: none)
      provider: () => new HDWalletProvider("0xbbfbee4961061d506ffbb11dfea64eba16355cbf1d9c29613126ba7fec0aed5d", `https://http-mainnet-node.huobichain.com`),
      network_id: "*",       // Any network (default: none)
      from: "0xB95a8dbB263EF5FBAF07d0577ec8738b0B35751E"
    },
    okextest: {
      networkCheckTimeout: 15000,
      provider: new HDWalletProvider(
        "0xacdcd16a80d7c204032bcac6378cbd3fa3afb7a2dd98d4bb26e3d728f1fd8791",
        `http://test-node.kingkong.exchange:16659`   // Url to an OKEXChain Node
      ),
      network_id: 65,
      // confirmations: 1,
      gas: 8000000,
      gasPrice: 100000000000,
      timeoutBlocks: 500
    },
    huobitest: {
      provider: () => new HDWalletProvider("0x1ef301196e6c8813a7e6bedc411e8b03b3ef6b8879ab0e18ef76eb9eaefb9d54", `https://http-testnet.hecochain.com`),
      confirmations: 1,
      gas: 7000000,
      network_id: "*",       // Any network (default: none)
      from: "0x1b8cE1d3707524394665a0c7470D9A43D0518C86"
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.16",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        //  evmVersion: "byzantium"
      }
    }
  }
}

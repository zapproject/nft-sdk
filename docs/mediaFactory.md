MediaFactory Class
==================


Index
-----

### Constructors

*   [constructor](#constructor)

### Methods

*   [deployMedia](#deployMedia)


### Examples

*   [instantiation](#instantiation)


Constructor
-----------

### Constructor[](#Constructor)

```
constructor(networkId: number, signer: Signer) {
    this.networkId = networkId;
    this.signer = signer;
    this.contract = new ethers.Contract(
      contractAddresses(networkId).mediaFactoryAddress,
      mediaFactoryAbi,
      signer
    );
  }
```

The constructor requires two arguments `networkId` and `signer`.

Valid `networkId`'s accepted by the constructor:

- 1: Ethereum Mainnet
- 4: Rinkeby Testnet
- 56: Binance Mainnet
- 97: Binance Testnet
- 1337: Ganache Local Testnet

The constructor takes in `networkId` and uses it to route to either the Ethereum Mainnet, Rinkeby Testnet, Binance Mainnet, Binance Testnet, and the local testnet provided by the Ganache node. If the `networkId` is invalid, the `contractAddresses` function will throw the following error `Constructor: Network Id is not supported.`. After routing to one of the networks, the `contractAddresses` function located in `src/utils.ts` will fetch the `MediaFactory` and `ZapMarket` addresses from `src/contract/addresses.ts` associated with the `networkId`. The fetched addresses will be used to create contract instances of `MediaFactory` and the `ZapMarket`.

The constructor takes in `signer` the abstraction of a Blockchain Account, which can be used to sign messages and transactions and send signed transactions to the Blockchain to execute state changing operations. The `signer` will be used to connect to the `MediaFactory` and `ZapMarket` contracts in order to invoke these state changing transactions.


Methods
-------

### deployMedia[](#deploymedia)

Deploys a custom NFT collection

| **Argument**       | **Type** | **Description**                                                        |
| ------------------ | -------- | ---------------------------------------------------------------------- |
| collectionName     | string   | The name of the NFT collection                                         |
| collectionSymbol   | string   | The symbol of the NFT collection                                       |
| permissive         | boolean  | Determines if minting can be performed other than the collection owner |
| collectionMetadata | string   | Contract level metadata                                                |


Examples
--------

### Creating a MediaFactory class instance[](#instantiation)

For this example, we are using chainId 4 and a Rinkeby provider node. The chainId and provider node can be replaced with the other available chainId's supported by Zap.

```
// Requires dotenv to allow the reading of environment variables
require("dotenv").config();

// Rinkeby chainId
const rinkebyChainId = 4;

// Requires the MediaFactory class
const { MediaFactory } = require("@zapprotocol/nft-sdk");

// Requires the ethers.js library
const ethers = require("ethers");

// Infura Rinkeby URL
const testnetUrl = `https://rinkeby.infura.io/v3/${process.env.PROJECT_ID}`;

// Creates the instance for the Rinkeby testnet provider
const provider = new ethers.providers.JsonRpcProvider(
testnetUrl,
rinkebyChainId
);

// Creates the signer instance with the users private key and provider
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Creates the MediaFactory class instance on the Rinkeby testnet with the signer connected
const mediaFactory = new MediaFactory(rinkebyChainId, signer);

const main = async () => {

  // Invoke the deployMedia function
  const deployMediaTx = await mediaFactory.deployMedia(
    // Collection name example
    "Test Collection",

    // Collection symbol example
    "TC",

    // Collection permissions example
    true,

    /* Collection metadata example
     * Be sure to create metadata that follows OpenSea standards
     * See https://docs.opensea.io/docs/contract-level-metadata
     */
    "https://ipfs.io/ipfs/Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiu"
  );

  // Logs the deployMedia transaction receipt
  console.log(deployMediaTx);
};

main();

```

The transaction receipt object properties will be the same regardless of the network. This transaction receipt is from the Rinkeby testnet to show as an example.

```
{
  transactionIndex: 37,
  blockNumber: 10372096,
  transactionHash: '0xcb9b3bac73c627a9a375ef4a1821453934e79dba9d43a3de084cc92b02f67607',
  address: '0x3a8f450C7844A8e8AbeFc7a0A7F37e8beC28c77C',
  topics: [
    '0xe4a881f0c02d889ad207adf5c28b33a60537c4485de8183463868e4ce4ec89cd',
    '0x0000000000000000000000001a04b52fa1fff5cd1ccb5617812b0cbb9eb8c401'
  ],
  data: '0x',
  logIndex: 77,
  blockHash: '0x41eb9271baac9f3114ca7e125c704820fcce18d5d70e5a12894af2ecea3914a1',
  args: [
    '0x1A04B52Fa1FFf5CD1cCb5617812b0cbb9eb8c401',
    mediaContract: '0x1A04B52Fa1FFf5CD1cCb5617812b0cbb9eb8c401'
  ],
  decode: [Function (anonymous)],
  event: 'MediaDeployed',
  eventSignature: 'MediaDeployed(address)',
  removeListener: [Function (anonymous)],
  getBlock: [Function (anonymous)],
  getTransaction: [Function (anonymous)],
  getTransactionReceipt: [Function (anonymous)]
}

```
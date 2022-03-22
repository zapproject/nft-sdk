# MediaFactory Class

## Constructor

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

### Creating a MediaFactory class instance on the Rinkeby testnet

```
// Requires dotenv to allow the reaading of environment variables
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
```

## Write Functions

### deployMedia

Deploys a custom NFT collection

| **Argument**       | **Type** | **Description**                                                        |
| ------------------ | -------- | ---------------------------------------------------------------------- |
| collectionName     | string   | The name of the NFT collection                                         |
| collectionSymbol   | string   | The symbol of the NFT collection                                       |
| permissive         | boolean  | Determines if minting can be performed other than the collection owner |
| collectionMetadata | string   | Contract level metadata                                                |

AuctionHouse Class
==================

The Auction House class binding for the AuctionHouse smart contract. An open auction house smart contract, enabling creators, collectors, and curators to sell their NFTs as their own auctions.


Index
-----

### Constructors

*   [constructor](#constructor)

### Properties

*   [auctionHouse](#auctionHouse)
*   [chainId](#chainId)
*   [media](#media)
*   [signer](#signer)

### Methods

*   [cancelAuction](#cancelAuction)
*   [createAuction](#createAuction)
*   [createBid](#createBid)
*   [endAuction](#endAuction)
*   [fetchAuction](#fetchAuction)
*   [fetchAuctionFromTransactionReceipt](#fetchAuctionFromTransactionReceipt)
*   [setAuctionReservePrice](#setAuctionReservePrice)
*   [startAuction](#startAuction)

### Examples
*   [instantiation](#instantiation)


Constructor
------------

### constructor[](#constructor)
*   Defined in [auctionHouse.ts:43](https://github.com/zapproject/nft-sdk/blob/ea00ee9/src/auctionHouse.ts#L43)

| **Argument**       | **Type**     | **Description**                                                       |
| ------------------ | ------------ | --------------------------------------------------------------------- |
| chainId            | number       | The network chain ID the auction house is associated with             |
| signer             | Signer       | The owner of the auction house                                        |
| customMediaAddress | string       | Optional argument if the auction house is for a custom media contract |
    

Properties
----------

### auctionHouse[](#auctionHouse)

auctionHouse: Contract

*   Defined in [auctionHouse.ts:32](https://github.com/zapproject/nft-sdk/blob/ea00ee9/src/auctionHouse.ts#L32)

### chainId[](#chainId)

chainId: number

*   Defined in [auctionHouse.ts:33](https://github.com/zapproject/nft-sdk/blob/ea00ee9/src/auctionHouse.ts#L33)

### media[](#media)

media: ZapMedia

*   Defined in [auctionHouse.ts:35](https://github.com/zapproject/nft-sdk/blob/ea00ee9/src/auctionHouse.ts#L35)

### signer[](#signer)

signer: Signer

*   Defined in [auctionHouse.ts:34](https://github.com/zapproject/nft-sdk/blob/ea00ee9/src/auctionHouse.ts#L34)

Methods
-------

### cancelAuction[](#cancelAuction)

*   cancelAuction(auctionId: BigNumberish): Promise<any\>

*   *   Defined in [auctionHouse.ts:298](https://github.com/zapproject/nft-sdk/blob/ea00ee9/src/auctionHouse.ts#L298)
    
    Cancels the specified auction. Owner or curator can cancel the auction if the auction does not have a bid placed.
    
| **Argument** | **Type**     | **Description**                                               |
| ------------ | ------------ | ------------------------------------------------------------- |
| auctionId    | BigNumberish | The auction ID identifier to approve the start of the auction |
    
    #### Returns Promise<any\>
    
    The Promise of the contract call
    

### createAuction[](#createAuction)

*   createAuction(tokenId: BigNumberish, tokenAddress: string, duration: BigNumberish, reservePrice: BigNumberish, curator: string, curatorFeePercentages: number, auctionCurrency: string): Promise<any\>

*   *   Defined in [auctionHouse.ts:107](https://github.com/zapproject/nft-sdk/blob/ea00ee9/src/auctionHouse.ts#L107)
    
    Creates a new auction. Mup>The Auction House class binding for the AuctionHouse smart contract. An open auction house smart contract, enabling creators, collectors, and curators to sell their NFTs as their own auctions.
    
| **Argument**       | **Type**     | **Description**                                                       |
| ------------ | -------- | -------- |
| tokenId | Bignumberish | The token ID identifier the token being auctioned belongs to |
| tokenAddress | string |  The media contract address associated with the token |
| duration | BigNumberish | The duration of the auction (in milliseconds) |
| reservePrice | BigNumberish | The reserve price for the auction |
| curator | string | The optional curator address associated with the auction |
| curatorFeePercentages | number | The optional curator fee percentage for the auction |
| auctionCurrency | string | The currency associated with the auction |
    

#### Returns Promise<any\>

The Promise auction ID associated with the created auction

### createBid[](#createBid)

*   createBid(auctionId: BigNumberish, amount: BigNumberish, mediaContract: string): Promise<any\>

*   *   Defined in [auctionHouse.ts:258](https://github.com/zapproject/nft-sdk/blob/ea00ee9/src/auctionHouse.ts#L258)
    
    Creates a bid on the specified auction. Can only place a valid bid after the start of the auction.
    
| **Argument**       | **Type**     | **Description**                                                       |
| ------------ | -------- | -------- |
| auctionId | BigNumberish | The auction ID identifier to approve the start of the auction |
| amount | BigNumberish | The bid amount to be bid |
| mediaContract | string | The media contract address associated with the auction |
        
    
    #### Returns Promise<any\>
    
    The Promise of the contract call
    

### endAuction[](#endAuction)

*   endAuction(auctionId: BigNumberish, mediaAddress: string): Promise<any\>

*   *   Defined in [auctionHouse.ts:335](https://github.com/zapproject/nft-sdk/blob/ea00ee9/src/auctionHouse.ts#L335)
    
    Ends the specified auction, only if called by owner or curator, a bid has been placed, and the duration of the auction has passed
    
| **Argument**       | **Type**     | **Description**                                                       |
| ------------ | -------- | -------- |
| auctionId | BigNumberish | The auction ID identifier to approve the start of the auction |
| mediaAddress | string | The media address associated with the auction |
    
    #### Returns Promise<any\>
    
    The Promise of the contract call
    

### fetchAuction[](#fetchAuction)

*   fetchAuction(auctionId: BigNumberish): Promise<any\>

*   *   Defined in [auctionHouse.ts:72](https://github.com/zapproject/nft-sdk/blob/ea00ee9/src/auctionHouse.ts#L72)
    
    Getter for a auction object specified by the auction ID.
    
| **Argument**       | **Type**     | **Description**                                                       |
| ------------ | -------- | -------- |
| auctionId | BigNumberish | The auction ID identifier to retreive the auction object |
    
    #### Returns Promise<any\>
    
    The Promise auction object if it exists
    

### fetchAuctionFromTransactionReceipt[](#fetchAuctionFromTransactionReceipt)

*   fetchAuctionFromTransactionReceipt(receipt: TransactionReceipt): Promise<null | [Auction](../docs-gen/interfaces/Auction.html)\>

*   *   Defined in [auctionHouse.ts:81](https://github.com/zapproject/nft-sdk/blob/ea00ee9/src/auctionHouse.ts#L81)
    
    Getter for a auction object specified by the transaction receipt.

| **Argument**       | **Type**     | **Description**                                                       |
| ------------ | -------- | -------- |
| receipt | TransactionReceipt | The transaction receipt identifier to retreive the auction object |
    
    #### Returns Promise<null | [Auction](../docs-gen/interfaces/Auction.html)\>
    
    The Promise auction object if it exists
    

### setAuctionReservePrice[](#setAuctionReservePrice)

*   setAuctionReservePrice(auctionId: BigNumberish, reservePrice: BigNumberish): Promise<any\>

*   *   Defined in [auctionHouse.ts:216](https://github.com/zapproject/nft-sdk/blob/ea00ee9/src/auctionHouse.ts#L216)
    
    Sets the reserve price for the specified auction

| **Argument**       | **Type**     | **Description**                                                       |
| ------------ | -------- | ------- |
| auctionId | BigNumberish | The auction ID identifier to approve the start of the auction |
| reservePrice | BigNumberish | The reserve price for the specified auction |
    
    #### Returns Promise<any\>
    
    The Promise of the contract call
    

### startAuction[](#startAuction)

*   startAuction(auctionId: BigNumberish, approved: boolean): Promise<any\>

*   *   Defined in [auctionHouse.ts:180](https://github.com/zapproject/nft-sdk/blob/ea00ee9/src/auctionHouse.ts#L180)
    
    Approves the start of the specified auction, if a curator was set for the auction. Can only be called by the curator,
    
| **Argument**       | **Type**     | **Description**                                                       |
| ------------ | -------- | ------- |
| auctionId | BigNumberish | The auction ID identifier to approve the start of the auction |
| approved | boolean | The approved flagged whether the start of the auction is approved or not |
    
    #### Returns Promise<any\>
    
    The Promise of the contract call
    

Examples
--------


### instantiation[](#instantiation)
For this example, we are using chainId 4 and a Rinkeby provider node. The chainId and provider node can be replaced with the other available chainId's supported by Zap.
```
// Requires dotenv to allow the reading of environment variables
require("dotenv").config();

// Rinkeby chainId. For other testnet instances, replace chain ID. e.i. BSCTestnet = 97
const rinkebyChainId = 4;

// Requires the AuctionHouse class
const { AuctionHouse } = require("@zapprotocol/nft-sdk");

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

// Create the ZapMedia class instance on the Rinkeby testnet with the signer connected
const zapMedia = new ZapMedia(rinkebyChainId, signer);

// Creates the AuctionHouse class instance on the Rinkeby testnet with the signer connected
const auctionHouse = new AuctionHouse(rinkebyChainId, signer);

const main = async () => {
  // create a new auction
  let createAuctionTx = await auctionHouse.createAuction(
      37,
      "0x0",
      36000,
      10000000000,
      "",
      0,
      "0x0"
  );

  // Logs the createAuction transaction receipt
  console.log(createAuctionTx);
};

main();

```
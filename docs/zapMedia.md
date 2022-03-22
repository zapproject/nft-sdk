# ZapMedia Class

## Constructor

```
 constructor(networkId: number, signer: Signer, customMediaAddress?: string) {
    this.networkId = networkId;

    this.signer = signer;

    this.market = new ethers.Contract(
      contractAddresses(networkId).zapMarketAddress,
      zapMarketAbi,
      signer
    );

    this.marketAddress = contractAddresses(networkId).zapMarketAddress;

    if (customMediaAddress == ethers.constants.AddressZero) {
      invariant(
        false,
        "ZapMedia (constructor): The (customMediaAddress) cannot be a zero address."
      );
    }

    if (customMediaAddress !== undefined) {
      this.media = new ethers.Contract(customMediaAddress, zapMediaAbi, signer);
      this.mediaAddress = customMediaAddress;
    } else {
      this.media = new ethers.Contract(
        contractAddresses(networkId).zapMediaAddress,
        zapMediaAbi,
        signer
      );
      this.mediaAddress = contractAddresses(networkId).zapMediaAddress;
    }
  }
```

The constructor requires two arguments `networkId` and `signer` while also supporting an optional argument `customMediaAddress`.

Valid `networkId`'s accepted by the constructor:

- 1: Ethereum Mainnet
- 4: Rinkeby Testnet
- 56: Binance Mainnet
- 97: Binance Testnet
- 1337: Ganache Local Testnet

The constructor takes in `networkId` and uses it to route to either the Ethereum Mainnet, Rinkeby Testnet, Binance Mainnet, Binance Testnet, and the local testnet provided by the Ganache node. If the `networkId` is invalid, the `contractAddresses` function will throw the following error `Constructor: Network Id is not supported.`. After routing to one of the networks, the `contractAddresses` function located in `src/utils.ts` will fetch the `ZapMedia` and `ZapMarket` addresses from `src/contract/addresses.ts` associated with the `networkId`. The fetched addresses will be used to create contract instances of `ZapMedia` and the `ZapMarket`.

The constructor takes in `signer` the abstraction of a Blockchain Account, which can be used to sign messages and transactions and send signed transactions to the Blockchain to execute state changing operations. The `signer` will be used to connect to the `ZapMedia` and `ZapMarket` contracts in order to invoke these state changing transactions.

The constructor takes in `customMediaAddress` and represents the address of a `ZapMedia` contract deployed and owned by an individual user and is not the default Zap NFT collection. When this argument is not passed to the constructor it defaults to the Zap NFT collection, but when a valid address is passed to the constructor that address attaches itself to the default `ZapMedia` contract instance and creates the custom instance deployed by an individual user.

### Creating a ZapMedia class instance

For this example, we are using chainId 4 and a Rinkeby provider node. The chainId and provider node can be replaced with the other available chainId's supported by Zap.

```
// Requires dotenv to allow the reading of environment variables
require("dotenv").config();

// Rinkeby chainId
const rinkebyChainId = 4;

// Requires the ZapMedia class
const { ZapMedia } = require("@zapprotocol/nft-sdk");

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

// Creates the ZapMedia class instance on the Rinkeby testnet with the signer connected
const zapMedia = new ZapMedia(rinkebyChainId, signer);
```

## Read Functions

### fetchBalanceOf

Fetch the balance of an address on an instance of a ZapMedia contract

| **Argument** | **Type** | **Description**                                           |
| ------------ | -------- | --------------------------------------------------------- |
| owner        | string   | The address of the account whose balance is being fetched |

### fetchOwnerOf

Fetch the owner of a tokenId on an instance of a ZapMedia contract

| **Argument** | **Type**     | **Description**                                                         |
| ------------ | ------------ | ----------------------------------------------------------------------- |
| tokenId      | BigNumberish | The Numerical identifier of a minted token whose owner is being fetched |

### fetchMediaOfOwnerByIndex

Fetch the tokenId of the specified owner by index on an instance of a ZapMedia Contract

| **Argument** | **Type**     | **Description**                           |
| ------------ | ------------ | ----------------------------------------- |
| owner        | string       | The owner address of the tokenId          |
| index        | BigNumberish | The ERC-721 enumerbale index of the owner |

### fetchContentURI

Fetch the content uri for the specified tokenId on an instance of a ZapMedia Contract

| **Argument** | **Type**     | **Description**                                                               |
| ------------ | ------------ | ----------------------------------------------------------------------------- |
| tokenId      | BigNumberish | The Numerical identifier of a minted token whose content uri is being fetched |

### fetchMetadataURI

Fetch the metadata uri for the specified tokenId on an instance of a ZapMedia Contract

| **Argument** | **Type**     | **Description**                                                                |
| ------------ | ------------ | ------------------------------------------------------------------------------ |
| tokenId      | BigNumberish | The Numerical identifier of a minted token whose metadata uri is being fetched |

### fetchContentHash

Fetch the contentHash of a tokenId on an instance of a ZapMedia contract.

| **Argument** | **Type**     | **Description**                                                               |
| ------------ | ------------ | ----------------------------------------------------------------------------- |
| tokenId      | BigNumberish | The Numerical identifier of a minted token whose contentHash is being fetched |

### fetchMetadataHash

Fetch the metadataHash of a tokenId on an instance of a ZapMedia contract.

| **Argument** | **Type**     | **Description**                                                                |
| ------------ | ------------ | ------------------------------------------------------------------------------ |
| tokenId      | BigNumberish | The Numerical identifier of a minted token whose metadataHash is being fetched |

### fetchCreator

Fetch the creator of a tokenId on an instance of a ZapMedia contract.

| **Argument** | **Type**     | **Description**                                                           |
| ------------ | ------------ | ------------------------------------------------------------------------- |
| tokenId      | BigNumberish | The Numerical identifier of a minted token whose creator is being fetched |

### fetchCurrentBidShares

Fetch the current bidShares of a tokenId on an instance of a ZapMedia contract.

| **Argument** | **Type**     | **Description**                                                              |
| ------------ | ------------ | ---------------------------------------------------------------------------- |
| mediaAddress | string       | The address of a ZapMedia contract                                           |
| tokenId      | BigNumberish | The Numerical identifier of a minted token whose bidShares are being fetched |

### fetchCurrentAsk

Fetch the current ask of a tokenId on an instance of a ZapMedia contract.

| **Argument** | **Type**     | **Description**                                                       |
| ------------ | ------------ | --------------------------------------------------------------------- |
| mediaAddress | string       | The address of a ZapMedia contract                                    |
| tokenId      | BigNumberish | The Numerical identifier of a minted token whose ask is being fetched |

### fetchCurrentBidForBidder

Fetch the current bid for a bidder on an instance of a ZapMedia contract.

| **Argument** | **Type**     | **Description**                                                       |
| ------------ | ------------ | --------------------------------------------------------------------- |
| mediaAddress | string       | The address of a ZapMedia contract                                    |
| tokenId      | BigNumberish | The Numerical identifier of a minted token whose bid is being fetched |
| bidder       | string       | The address of the bidder                                             |

### fetchTotalMedia

Fetch the total amount of non-burned tokens that has been minted on an instance of a ZapMedia contract

| **Argument** | **Type** | **Description** |
| ------------ | -------- | --------------- |
| None         | None     | None            |

### fetchMediaByIndex

Fetch the tokenId by index on an instance of a ZapMedia contract

| **Argument** | **Type**     | **Description**                                                    |
| ------------ | ------------ | ------------------------------------------------------------------ |
| index        | BigNumberish | The ERC-721 enumerbale index on an instance of a ZapMedia contract |

### fetchApproved

Fetch the approved account for the specified tokenId

| **Argument** | **Type**     | **Description**                                                                    |
| ------------ | ------------ | ---------------------------------------------------------------------------------- |
| tokenId      | BigNumberish | The Numerical identifier of a minted token whose approved address is being fetched |

### fetchIsApprovedForAll

Fetch if the specified operator is approved for all tokenId's owned by the specified owner on an instance of a ZapMedia contract

| **Argument** | **Type** | **Description**                                    |
| ------------ | -------- | -------------------------------------------------- |
| owner        | string   | The address of the token's owner                   |
| operator     | string   | The address of the approved on behalf of the owner |

## Write Functions

### mint

Create and allocate an ERC-721 token to the callers public address

| **Argument** | **Type**  | **Description**                                                                         |
| ------------ | --------- | --------------------------------------------------------------------------------------- |
| mediaData    | MediaData | The data represented by this media, including SHA256 hashes for future integrity checks |
| bidShares    | BidShares | The percentage of bid fees that should be perpetually rewarded to share holders         |

### setAsk

Sets the Ask on a specified tokenId

| **Argument** | **Type**     | **Description**                                                   |
| ------------ | ------------ | ----------------------------------------------------------------- |
| tokenId      | BigNumberish | The numerical identifier of a minted token whose ask is being set |
| ask          | Ask          | The ask to be set                                                 |

### setBid

Sets a bid on the specified tokenId

| **Argument** | **Type**     | **Description**                                            |
| ------------ | ------------ | ---------------------------------------------------------- |
| tokenId      | BigNumberish | The numerical identifier of a minted token to set a bid on |
| bid          | Bid          | The bid to be set                                          |

### removeAsk

Removes the ask on the specified tokenId

| **Argument** | **Type**     | **Description**                                     |
| ------------ | ------------ | --------------------------------------------------- |
| tokenId      | BigNumberish | The numerical identifier whose ask is being removed |

### acceptBid

Accept a bid on a specified tokenId

| **Argument** | **Type**     | **Description**                                                        |
| ------------ | ------------ | ---------------------------------------------------------------------- |
| tokenId      | BigNumberish | The numerical identifier of a minted token whose bid is being accepted |
| bid          | Bid          | The bid to be accepted                                                 |

### removeBid

Removes the bid from a specified tokenId

| **Argument** | **Type**     | **Description**                                                       |
| ------------ | ------------ | --------------------------------------------------------------------- |
| tokenId      | BigNumberish | The Numerical identifier of a minted token whose bid is being removed |

### updateMetadataURI

Updates the metadataUII of a specified tokenId

| **Argument** | **Type**     | **Description**                                                            |
| ------------ | ------------ | -------------------------------------------------------------------------- |
| tokenId      | BigNumberish | The numerical identifier of a minted token whose metadURI is being updated |
| metadataURI  | string       | The metadataURI to be updated to                                           |

### permit

Permit an address to act on behalf of the owner of the tokenId

| **Argument** | **Type**        | **Description**                                          |
| ------------ | --------------- | -------------------------------------------------------- |
| spender      | string          | The address that is being permitted to spend the tokenId |
| tokenId      | string          | The numerical identifier for a minted token              |
| sig          | EIP712Signature | The eip-712 compliant signature to be verified on chain  |

### revokeApproval

Revokes the approved address for a specified tokenId

| **Argument** | **Type** | **Description**                                                           |
| ------------ | -------- | ------------------------------------------------------------------------- |
| tokenId      | string   | The numerical identifier for a minted token who approval is being revoked |

### burn

Burns a specified tokenId

| **Argument** | **Type** | **Description**                                          |
| ------------ | -------- | -------------------------------------------------------- |
| tokenId      | string   | The numerical identifier for a minted token to be burned |

### updateContentURI

Updates the contentURI of a specified tokenId

| **Argument** | **Type**     | **Description**                                                              |
| ------------ | ------------ | ---------------------------------------------------------------------------- |
| tokenId      | BigNumberish | The numerical identifier of a minted token whose contentURI is being updated |
| tokenURI     | string       | The tokenURI to be updated to                                                |

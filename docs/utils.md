Utils
=====

Utility functions to help construct, validate, and retreive data types.


Index
-----

### Class
*   [Decimal](#Decimal)

### Fuctions

*   [contractAddresses](#contractAddresses)
*   [constructAsk](#constructAsk)
*   [constructBid](#constructBid)
*   [constructBidShares](#constructBidShares)
*   [constructMediaData](#constructMediaData)
*   [validateBidShares](#validateBidShares)
*   [validateAndParseAddress](#validateAndParseAddress)
*   [validateURI](#validateURI)


Class
-----

### Decimal[](#Decimal)

*   Defined in [utils.ts:194](https://github.com/zapproject/nft-sdk/blob/main/src/utils.ts#L194)

    Defines a fixed-point number with 18 decimal places.

| **Argument** | **Type**     | **Description**                                                       |
| ------------ | -------- | ------- |
| value | number / string | The value to convert to fixed number with 18 decimal places |

 
Functions
---------

### contractAddresses[](#contractAddresses)

*   contractAddresses(networkId: number): any

*   *   Defined in [utils.ts](https://github.com/zapproject/nft-sdk/blob/main/src/utils.ts#L25)

    Provides the MediaFactory, ZapMarket, ZapMedia, and ZapAuction addresses pertaining to the specified chain ID.

| **Argument** | **Type**     | **Description**                                                       |
| ------------ | -------- | -------- |
| networkId | number | The network/chain ID

    #### Returns any

    The JSON object containing the MediaFactory, ZapMarket, ZapMedia, and ZapAuction addresses. 
    { mediaFactoryAddress, zapMarketAddress, zapMediaAddress, zapAuctionAddress }


### constructAsk[](#constructAsk)

*   constructAsk(currency: string, amount: BigNumberish): Ask

*   *   Defined in [utils.ts](https://github.com/zapproject/nft-sdk/blob/main/src/utils.ts#L134)

    Constructs an Ask object.

| **Argument** | **Type**     | **Description**                                                       |
| ------------ | -------- | ------- |
| currency | string | The currency address to be exchanged with |
| amount | BigNumberish | The amount in specified currency asked |

    ##### Returns Ask

    The Ask object containing the specified currency and amount.


### constructBid[](#constructBid)

*   constructBid(currency: string, amount: BigNumberish, bidder: string, recipient: string, sellOnShare: number): Bid

*   *   Defined in [utils.ts](https://github.com/zapproject/nft-sdk/blob/main/src/utils.ts#L150)

    Constructs a Bid object.

| **Argument** | **Type**     | **Description**                                                       |
| ------------ | -------- | ------- |
| currency | string | The currency address to be exchanged with |
| amount | BigNumberish | The amount in specified currency to bid |
| bidder | string | The address of the bidder |
| recipient | string | The address of the token receiver if the bid is accepted |
| sellOnShare | number | The % of the next sale to award the current owner |

    #### Returns Bid

    The Bid object containing the specified currency, amount, bidder, recipient, and sellOnShare parameters.


### constructBidShares[](#constructBidShares)

*   constructBidShares(collaborators: Array<string>, collabShares: Array<number>, creator: number, owner: number): any

*   *   Defined in [utils.ts](https://github.com/zapproject/nft-sdk/blob/main/src/utils.ts#L276)

    Constructs a BidShares object.

| **Argument** | **Type**     | **Description**                                                       |
| ------------ | -------- | -------- |
| collaborators | Array<string> | The list of collaborator addresses |
| collabShares | Array<number> | The list of shares per collaborator |
| creator | number | The % of sale value that goes to the creator of the nft |
| owner | number | The % of sale value that goes to the seller (current owner) of the nft |

    #### Returns BidShares

    The BidShares object containing the specified collaborators, collabShares, creator, and owner.


### constructMediaData[](#constructMediaData)

*   constructMediaData(tokenURI: string, metadataURI: string, contentHash: BytesLike, metadataHash: BytesLike): MediaData

*   *   Defined in [utils.ts](https://github.com/zapproject/nft-sdk/blob/main/src/utils.ts#L248)

    Constructs a MediaData object.

| **Argument** | **Type**     | **Description**                                                       |
| ------------ | -------- | ------- |
| tokenURI | string | The URI of the token |
| metadataURI | string | The URI of token metadata |
| contentHash | BytesLike | The KECCAK256 hash of the content pointed to by tokenURI |
| metadataHash | BytesLike | A KECCAK256 hash of the content pointed to by metadataURI |

    #### Returns MediaData

    The MediaData object containing the specified tokenURI, metadataURI, contentHash, and metadataHash.


### validateAndParseAddress[](#validateAndParseAddress)

*   validateAndParseAddress(address: string): string

*   *   Defined in [utils.ts](https://github.com/zapproject/nft-sdk/blob/main/src/utils.ts#L326)

    Validates and returns the checksummed address.

| **Argument** | **Type**     | **Description**                                                       |
| ------------ | -------- | ------- |
| address | string | The address to validate |

    #### Returns string

    The address that was checksummed.


### validateBidShares[](#validateBidShares)

*   validateBidShares(collabShares: Array<DecimalValue>, creator: DecimalValue, owner: DecimalValue)

*   *   Defined in [utils.ts](https://github.com/zapproject/nft-sdk/blob/main/src/utils.ts#L91)

    Validates whether the specified bid shares is valid.

| **Argument** | **Type**     | **Description**                                                       |
| ------------ | -------- | ------- |
| collabShares | Array<DecimalValue> | The list of shares per collaborator |
| creator | DecimalValue | The % of sale value that goes to the creator of the nft |
| owner | DecimalValue | The % of sale value that goes to the seller (current owner) of the nft |


### validateURI[](#validateURI)

*   validateURI(uri: string)

*   *   Defined in [utils.ts](https://github.com/zapproject/nft-sdk/blob/main/src/utils.ts#L315)

    Validates whether the URI is prefixed with 'https://".

| **Argument** | **Type**     | **Description**                                                       |
| ------------ | -------- | ------- |
| uri | string | The URI to be validated |
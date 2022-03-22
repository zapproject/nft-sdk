Types
=====

The data types used in the class bindings.


Index
-----

### Type
*   [Ask](#Ask)
*   [Bid](#Bid)
*   [BidShares](#BidShares)
*   [DecimalValue](#DecimalValue)
*   [EIP712Signature](#EIP712Signature)
*   [EIP712Domain](#EIP712Domain)
*   [MediaData](#MediaData)


Type
----

### Ask[](#Ask)

*   Defined in [types.ts:19](https://github.com/zapproject/nft-sdk/blob/main/src/types.ts#L19)

| **Property** | **Type**     | **Description**                                                       |
| ---- | ---- | ---- |
| currency | string | The currency address to be exchanged with |
| amount | BigNumberish | The amount in specified currency asked |


### Bid[](#Bid)

*   Defined in [types.ts:27](https://github.com/zapproject/nft-sdk/blob/main/src/types.ts#L27)

    Zap Media Protocol Bid
    
| **Property** | **Type**     | **Description**                                                       |
| ---- | ---- | ---- |
| currency | string | The currency address to be exchanged with |
| amount | BigNumberish | The amount in specified currency to bid |
| bidder | string | The address of the bidder |
| recipient | string | The address of the token receiver if the bid is accepted |
| sellOnShare | DecimalValue | The % of the next sale to award the current owner |


### BidShares[](#BidShares)

*   Defined in [types.ts:35](https://github.com/zapproject/nft-sdk/blob/main/src/types.ts#L35)

    Zap Media Protocol BidShares

| **Property** | **Type**     | **Description**                                                       |
| ---- | ---- | ---- |
| collaborators | any | The list of collaborator addresses |
| collabShares | any | The list of shares per collaborator |
| creator | any | The % of sale value that goes to the creator of the nft |
| owner | any | The % of sale value that goes to the seller (current owner) of the nft |


### DecimalValue[](#DecimalValue)

*   Defined in [types.ts:7](https://github.com/zapproject/nft-sdk/blob/main/src/types.ts#L7)

    Internal type to represent a Decimal value.

| **Property** | **Type**     | **Description**                                                       |
| ---- | ---- | ---- |
| value | BigNumber | The decimal value to represent |


### EIP712Signature[](#EIP712Signature)

*   Defined in [types.ts:45](https://github.com/zapproject/nft-sdk/blob/main/src/types.ts#L45)

    EIP712 Signature

| **Property** | **Type** | **Description** |
| ---- | ---- | ---- |
| deadline | BigNumberish | The deadline for the permit |
| v | number | The v of the signature |
| r | BytesLike | The r of the signature |
| s | BytesLike | The s of the signature |


### EIP712Domain[](#EIP712Domain)

*   Defined in [types.ts:55](https://github.com/zapproject/nft-sdk/blob/main/src/types.ts#L55)

| **Property** | **Type**     | **Description**                                                       |
| ---- | ---- | ---- |
| name | string | The domain name |
| version | The domain version |
| chainId | The chaind ID of the domain |
| verifyingContract | string | The address of the verifying contract |


### MediaData[](#MediaData)

*   Defined in [types.ts:9](https://github.com/zapproject/nft-sdk/blob/main/src/types.ts#L9)


    Zap Media Protocol MediaData

| **Property** | **Type**     | **Description**                                                       |
| ---- | ---- | ---- |
| tokenURI | any | The URI of the token |
| metadataURI | any | The URI of token metadata |
| contentHash | any | The KECCAK256 hash of the content pointed to by tokenURI |
| metadataHash | any | A KECCAK256 hash of the content pointed to by metadataURI |

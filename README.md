# Zap NFT SDK

- [ZapMedia](docs/zapMedia.md)

## Local Testing

### Configuration

- In the current terminal verify the path is `nft-sdk` and run `yarn install` to install all dependencies

### To Run All Test Files

- In a new terminal verify the path is `nft-sdk` and run `yarn run ganache` to start the local Ganache node.

- In the original terminal where `yarn install` was executed verify the path is `nft-sdk` and run `yarn run test` or `yarn test`.

### To Run A Single Test File

- Single test file titles `MediaFactory`, `ZapMedia`, `AuctionHouse`.

- If the `To Run All Test Files` section was skipped in a new terminal verify the path is `nft-sdk` and run `yarn run ganache` to start the local Ganache node.

- In the original terminal where `yarn install` was executed verify the path is `nft-sdk` and run `yarn test -- --grep <test-file-title>`

### To Run A Single Test

- If the `To Run All Test Files` section was skipped in a new terminal verify the path is `nft-sdk` and run `yarn run ganache` to start the local Ganache node.

- In the original terminal where `yarn install` was executed verify the path is `nft-sdk`. Choose a test file and add `.only` to a single `it` or `describe` block and run `yarn test`.

Will only run the `Should fetch the total media minted on the main media` test.

```
 it.only("Should fetch the total media minted on the main media", async () => {
    // Returns the total amount tokens minted on the main media
    const totalSupply: BigNumberish =
    await signerOneConnected.fetchTotalMedia();

    // Expect the totalSupply to equal 2
    expect(parseInt(totalSupply._hex)).to.equal(2);
});
```

Will run all tests within the `#fetchTotalMedia` describe block.

```
describe.only("#fetchTotalMedia", () => {
    it("Should fetch the total media minted on the main media", async () => {
        // Returns the total amount tokens minted on the main media
        const totalSupply: BigNumberish =
        await signerOneConnected.fetchTotalMedia();

        // Expect the totalSupply to equal 2
        expect(parseInt(totalSupply._hex)).to.equal(2);
    });

    it("Should fetch the total media minted on a custom media", async () => {
        // Returns the total amount tokens minted on the custom media
        const totalSupply: BigNumberish =
        await customMediaSigner1.fetchTotalMedia();

        // Expect the totalSupply to equal 1
        expect(parseInt(totalSupply._hex)).to.equal(1);
    });
});
```

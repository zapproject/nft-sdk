import { Contract, ethers, Signer } from "ethers";

import { contractAddresses } from "./utils";

import { mediaFactoryAbi, zapMediaAbi } from "./contract/abi";

import { Address } from "cluster";

class MediaFactory {
  contract: Contract;
  networkId: number;
  signer: Signer;

  constructor(networkId: number, signer: Signer) {
    this.networkId = networkId;
    this.signer = signer;
    this.contract = new ethers.Contract(
      contractAddresses(networkId).mediaFactoryAddress,
      mediaFactoryAbi,
      signer
    );
  }

  /**
   * Deploys a NFT collection.
   * @param {string} collectionName - The name of the NFT collection.
   * @param {string} collectionSymbol - The symbol of the NFT collection.
   * @param {boolean} permissive - Determines if minting can be performed other than the collection owner.
   * @param {string} collectionMetadta - Contract level metadata.
   */
  async deployMedia(
    collectionName: string,
    collectionSymbol: string,
    permissive: boolean,
    collectionMetadta: string
  ): Promise<any> {
    const tx = await this.contract.deployMedia(
      collectionName,
      collectionSymbol,
      contractAddresses(this.networkId).zapMarketAddress,
      permissive,
      collectionMetadta
    );

    const receipt = await tx.wait();

    const eventLog = receipt.events[receipt.events.length - 1];

    return eventLog;
  }
}

export default MediaFactory;

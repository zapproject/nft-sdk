import { AuctionHouse, Auction, ZapMedia, MediaFactory } from "@zapprotocol/nft-sdk";
import { constructMediaData } from "@zapprotocol/nft-sdk";
import { address } from "./config.json";
import { ethers, Signer, Wallet } from "ethers";

let ah: AuctionHouse;
let auction: Auction;
let zm: ZapMedia;
let zmf: MediaFactory;

// get private key from config
const provider = new ethers.providers.JsonRpcProvider("https://speedy-nodes-nyc.moralis.io/23ec47af36c0619ef01d1f2d/bsc/testnet");
let wallet = new Wallet(address, provider);

zm = new ZapMedia(97, wallet);

// // build test media data
let tokenURI = ethers.utils.formatBytes32String("https://nft-sdk-test-uri");
let metadataURI = ethers.utils.formatBytes32String("https://nft-sdk-test-uri");
let contentHashRaw = ethers.utils.keccak256(tokenURI);
let contentHash = ethers.utils.arrayify(contentHashRaw);
let metadataHashRaw = ethers.utils.keccak256(metadataURI);
let metadataHash = ethers.utils.arrayify(metadataHashRaw);

let mediaData = constructMediaData(tokenURI, metadataURI, contentHash, metadataHash);

async function main(){
    let comsTest = await zm.fetchCreator(0);
    console.log(comsTest);
}
// await zm.mint()
main();
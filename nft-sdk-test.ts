import { AuctionHouse, Auction, ZapMedia, MediaFactory } from "@zapprotocol/nft-sdk";
import { constructMediaData, constructBidShares } from "@zapprotocol/nft-sdk";
import { address } from "./config.json";
import { ethers, Signer, Wallet } from "ethers";

let ah: AuctionHouse;
let auction: Auction;
let zm: ZapMedia;
let zmf: MediaFactory;

// get private key from config
const provider = new ethers.providers.JsonRpcProvider("https://speedy-nodes-nyc.moralis.io/23ec47af36c0619ef01d1f2d/bsc/testnet");
let wallet = new Wallet(address, provider);

ah = new AuctionHouse(97, wallet);
zm = new ZapMedia(97, wallet);

// // build test media data
let tokenURI = "https://nft-sdk-test-token-uri.com/";
let metadataURI = "https://nft-sdk-test-metadata-uri.com/";
let tokenURIBytes = ethers.utils.formatBytes32String("nft-sdk-test-c-uri");
let metadataURIBytes = ethers.utils.formatBytes32String("nft-sdk-test-m-uri");
let contentHashRaw = ethers.utils.keccak256(tokenURIBytes);
let contentHash = ethers.utils.arrayify(contentHashRaw);
let metadataHashRaw = ethers.utils.keccak256(metadataURIBytes);
let metadataHash = ethers.utils.arrayify(metadataHashRaw);

let mediaData = constructMediaData(tokenURI, metadataURI, contentHash, metadataHash);
let bidShares = constructBidShares(
    [], 
    [], 
    15, 
    80
);

async function main(){
    let comsTest = await zm.fetchCreator(37);
    console.log(comsTest);

    // let res = await zm.mint(mediaData, bidShares);
    // console.log(res);

    let balance = await zm.fetchBalanceOf(wallet.address);
    console.log(balance.toNumber());

    let tokenId = await zm.fetchOwnerOf(37);
    console.log(tokenId);

    // await zm.approve(, 37);

    let auctionID = await ah.createAuction(37, zm.mediaAddress, 300000, 10000000000000000000, "", 0, "0x5FbDB2315678afecb367f032d93F642f64180aa3");
    console.log(auctionID);
}

main();
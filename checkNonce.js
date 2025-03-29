const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider("https://jsrpc.anryton.com"); // Replace with your RPC URL
const wallet = new ethers.Wallet("fdaeb44876bdfdb4fc61088c9ac183e1ed6d5de733dc160f3087b86b6012db11", provider); // Replace with your private key

async function checkNonce() {
    const nonce = await provider.getTransactionCount(wallet.address, 'latest');
    console.log("Current nonce:", nonce);
}

checkNonce();

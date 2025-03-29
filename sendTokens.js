const { ethers } = require("hardhat");
const fs = require("fs");

const tokenAddress = "0x07f1938FE641b8EA0582d695af3f1A6B6bAacD82"; // Token Contract Address
const tokenABI = [
    "function transfer(address recipient, uint256 amount) public returns (bool)"
];

const addressesFile = "addresses.txt";
const rawRecipients = fs.readFileSync(addressesFile, "utf-8").split("\n").map(addr => addr.trim());

const batchSize = 100;
const amount = ethers.parseUnits("1.0", 18);

async function sendTokens() {
    try {
        const signers = await ethers.getSigners();
        if (signers.length === 0) throw new Error("No signer available. Check Hardhat accounts.");
        const signer = signers[0];
        const provider = signer.provider;
        const tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);

        // ✅ Get the initial nonce
        let nonce = await provider.getTransactionCount(signer.address);
        console.log(`🔹 Starting nonce: ${nonce}`);

        const validRecipients = rawRecipients.filter(addr => ethers.isAddress(addr));
        console.log(`🔹 Sending tokens to ${validRecipients.length} recipients in batches of ${batchSize}...\n`);

        for (let i = 0; i < validRecipients.length; i += batchSize) {
            const batch = validRecipients.slice(i, i + batchSize);

            for (let recipient of batch) {
                try {
                    const tx = await tokenContract.transfer(recipient, amount, { nonce });
                    console.log(`✅ Sent ${ethers.formatUnits(amount, 18)} tokens to ${recipient}, TX: ${tx.hash}`);
                    nonce++; // ✅ Manually increment nonce for the next transaction
                    await tx.wait(); // ✅ Wait for transaction confirmation before sending the next
                } catch (error) {
                    console.error(`❌ Failed to send to ${recipient}:`, error.message);
                }
            }

            console.log(`🚀 Batch ${Math.floor(i / batchSize) + 1} completed!\n`);
        }

        console.log(`🚀 All transactions completed successfully!`);
    } catch (error) {
        console.error(`🚨 Error:`, error.message);
    }
}

sendTokens();

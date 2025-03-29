const { ethers } = require("ethers");
const fs = require("fs");

const totalAddresses = 100000; // Adjust if needed
const outputFile = "addresses.txt";
const validAddresses = new Set(); // Use a Set to avoid duplicates

while (validAddresses.size < totalAddresses) {
    const wallet = ethers.Wallet.createRandom();
    const address = wallet.address;

    // ✅ Ensure address is valid before adding
    if (ethers.isAddress(address)) {
        validAddresses.add(address);
    }
}

// ✅ Write only valid addresses to the file
fs.writeFileSync(outputFile, [...validAddresses].join("\n"), "utf-8");

console.log(`✅ Successfully generated ${validAddresses.size} valid Ethereum addresses!`);

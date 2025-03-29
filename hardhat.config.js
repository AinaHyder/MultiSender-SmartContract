require("@nomicfoundation/hardhat-ethers"); // Import Hardhat Ethers plugin
require("dotenv").config(); // Load environment variables from .env

module.exports = {
    solidity: "0.8.28",  // Ensure this matches your contract pragma
    networks: {
        anryton: {
            url: "https://jsrpc.anryton.com",  // RPC URL for Anryton
            accounts: [process.env.PRIVATE_KEY] // Use environment variable for security
        }
    }
};

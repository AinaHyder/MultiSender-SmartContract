🚀 Multi-Sender Smart Contract
A blockchain-based multi-sender tool that efficiently distributes tokens to thousands of Ethereum addresses using batch processing, address validation, and optimized gas usage.

📌 Features
✅ Batch Processing: Sends tokens in optimized batches to prevent gas limit issues.
✅ Address Validation: Uses ethers.isAddress() to ensure only valid addresses receive tokens.
✅ Automated Filtering: Removes inactive or invalid addresses before processing transactions.
✅ Optimized Gas Usage: Ensures efficient transactions to minimize costs.
✅ Real-Time Transaction Logs: Displays successful and failed transactions in the console.
✅ Frontend UI/UX: User-friendly interface for interacting with the contract.

🛠️ Tech Stack
Hardhat - Smart contract development & testing

Ethers.js - Blockchain interaction

Solidity - Smart contract programming

JavaScript - Backend scripting

Node.js - Runtime environment

HTML/CSS/React - Frontend UI

🔹 How It Works
Upload a list of recipient addresses in addresses.txt.

Run the Hardhat script to process transactions in batches.

Monitor real-time logs for successful transactions and any errors.

Check the blockchain explorer to verify completed transactions.

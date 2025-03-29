const { ethers } = require("hardhat");

async function main() {
    // Define your contract address and amount to approve
    const tokenAddress = "0x07f1938FE641b8EA0582d695af3f1A6B6bAacD82";  // Replace with actual token address
    const spenderAddress = "0x07f1938FE641b8EA0582d695af3f1A6B6bAacD82";  // Replace with spender's address
    const amount = ethers.parseUnits("1.0", 18); // ✅ Corrected syntax for Ethers v6

    // Get signer (the account approving the transaction)
    const signer = await ethers.provider.getSigner();

    console.log(`Approving ${amount.toString()} tokens for spender: ${spenderAddress}`);

    // Attach to the ERC-20 token contract
    const tokenAbi = [
        "function approve(address spender, uint256 amount) public returns (bool)"
    ];
    const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, signer);

    // Send the approval transaction
    const tx = await tokenContract.approve(spenderAddress, amount);
    await tx.wait();

    console.log(`✅ Approval successful! Transaction hash: ${tx.hash}`);
}

// Run the script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("❌ Error:", error);
        process.exit(1);
    });

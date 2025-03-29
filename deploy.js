const { ethers } = require("hardhat"); // ✅ Import ethers correctly

async function main() {
    const [deployer] = await ethers.getSigners(); // ✅ Ensure ethers is used

    console.log("Deploying contracts with the account:", deployer.address);

    const MultiSender = await ethers.getContractFactory("MultiSender");
    const multiSender = await MultiSender.deploy();

    await multiSender.deployed();
    console.log("MultiSender deployed at:", multiSender.address); // ✅ Get the contract address
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

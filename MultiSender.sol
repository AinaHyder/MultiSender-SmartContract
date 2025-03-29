// SPDX-License-Identifier: MIT
   pragma solidity ^0.8.0;

   import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

   contract MultiSender {
       address public owner;

       constructor() {
           owner = msg.sender;
       }

       modifier onlyOwner() {
           require(msg.sender == owner, "Only owner can call this function");
           _;
       }

       function sendTokens(
           address tokenAddress,
           address[] memory recipients,
           uint256[] memory amounts
       ) external onlyOwner {
           require(recipients.length == amounts.length, "Arrays length mismatch");

           IERC20 token = IERC20(tokenAddress);

           for (uint256 i = 0; i < recipients.length; i++) {
               require(token.transferFrom(msg.sender, recipients[i], amounts[i]), "Transfer failed");
           }
       }
   }

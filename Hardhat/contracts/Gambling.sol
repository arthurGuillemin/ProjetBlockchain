// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "hardhat/console.sol";

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract Gambling {
    address public owner;
    IERC20 public token;
    
    // Multipliers (multiplied by 100 to keep decimal precision)
    uint256[] public multipliers;

    event BetPlaced(
        address indexed player,
        uint256 betAmount,
        uint8 cardIndex,
        bool win,
        uint256 payout
    );

    constructor(address _token) {
        owner = msg.sender;
        token = IERC20(_token);
        multipliers = [250, 200, 300, 150]; // Example: 250 = x2.5
    }

    function bet(uint256 amount, uint8 cardIndex) external {
        require(cardIndex < multipliers.length, "Invalid card index");
        require(amount > 0, "Bet amount must be greater than 0");

        // Verify token transfer
        require(token.transferFrom(msg.sender, address(this), amount), "Token transfer failed");

        console.log("Player:", msg.sender);
        console.log("Bet received:", amount);
        console.log("Selected card index:", cardIndex);

        // Basic random generation
        uint256 random = uint256(keccak256(abi.encodePacked(block.timestamp, block.prevrandao, msg.sender, block.number))) % 100;
        bool win = random < 50;
        uint256 payout = 0;

        if (win) {
            uint256 multiplier = multipliers[cardIndex];
            payout = (amount * multiplier) / 100;

            console.log("Multiplier:", multiplier);
            console.log("Calculated payout:", payout);

            require(token.balanceOf(address(this)) >= payout, "Insufficient contract funds");
            require(token.transfer(msg.sender, payout), "Payout transfer failed");

            console.log("Payout sent:", payout);
        } else {
            console.log("Player lost the bet.");
        }

        emit BetPlaced(msg.sender, amount, cardIndex, win, payout);
    }

    function deposit(uint256 amount) external {
        require(msg.sender == owner, "Only the owner can deposit");
        require(token.transferFrom(msg.sender, address(this), amount), "Token deposit failed");
    }

    function withdraw(uint256 amount) external {
        require(msg.sender == owner, "Only the owner can withdraw");
        require(token.balanceOf(address(this)) >= amount, "Insufficient contract funds");
        require(token.transfer(owner, amount), "Withdrawal failed");
    }

    function getMultipliers() external view returns (uint256[] memory) {
        return multipliers;
    }

    function setMultipliers(uint256[] calldata newMultipliers) external {
        require(msg.sender == owner, "Only the owner can set multipliers");
        multipliers = newMultipliers;
    }
}

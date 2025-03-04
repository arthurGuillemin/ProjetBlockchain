// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract Gambling {
    address public owner;
    IERC20 public token;

    event BetPlaced(address indexed player, uint256 betAmount, bool win, uint256 payout);

    constructor(address _token) {
        owner = msg.sender;
        token = IERC20(_token);
    }

    function bet(uint256 amount, uint8 chance) external {
        require(chance > 0 && chance <= 100, "Chance invalide");
        require(token.transferFrom(msg.sender, address(this), amount), "Transfert echoue");

        uint256 random = uint256(keccak256(abi.encodePacked(block.timestamp, block.prevrandao, msg.sender))) % 100 + 1;
        bool win;
        uint256 payout = 0;

        if (random <= chance) {
            win = true;
            payout = (amount * 100) / chance;
            require(token.balanceOf(address(this)) >= payout, "Fonds insuffisants");
            token.transfer(msg.sender, payout);
        }

        emit BetPlaced(msg.sender, amount, win, payout);
    }

    function deposit(uint256 amount) external {
        require(msg.sender == owner, "Uniquement le proprietaire");
        require(token.transferFrom(msg.sender, address(this), amount), "Transfert echoue");
    }

    function withdraw(uint256 amount) external {
        require(msg.sender == owner, "Uniquement le proprietaire");
        require(token.balanceOf(address(this)) >= amount, "Fonds insuffisants");
        token.transfer(owner, amount);
    }
}

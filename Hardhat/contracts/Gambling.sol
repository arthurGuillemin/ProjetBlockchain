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
    
    // Multiplicateurs (multiplié par 100 pour garder les décimales) :
    // par exemple, 250 correspond à x2.5
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
        // Initialisation pour 4 cartes
        multipliers = [250, 200, 300, 150];
    }

    /**
     * @notice Le joueur mise un montant et choisit une carte (index).
     * Un tirage aléatoire simple donne 50% de chance de gagner.
     * En cas de victoire, le payout est calculé selon le multiplicateur.
     */
function bet(uint256 amount, uint8 cardIndex) external {
    require(cardIndex < multipliers.length, "Index de carte invalide");
    require(token.transferFrom(msg.sender, address(this), amount), "Transfert echoue");

    // Log pour vérifier le montant et l'index de la carte
    emit BetPlaced(msg.sender, amount, cardIndex, false, 0);

    // Tirage aléatoire simple
    uint256 random = uint256(keccak256(abi.encodePacked(block.timestamp, block.prevrandao, msg.sender))) % 100;
    bool win = random < 50;
    uint256 payout = 0;
    if (win) {
        uint256 multiplier = multipliers[cardIndex];
        payout = (amount * multiplier) / 100;
        require(token.balanceOf(address(this)) >= payout, "Fonds insuffisants");
        token.transfer(msg.sender, payout);
    }

    emit BetPlaced(msg.sender, amount, cardIndex, win, payout);
}

    /**
     * @notice Le propriétaire dépose des tokens pour couvrir les gains.
     */
    function deposit(uint256 amount) external {
        require(msg.sender == owner, "Uniquement le proprietaire");
        require(token.transferFrom(msg.sender, address(this), amount), "Transfert echoue");
    }

    /**
     * @notice Le propriétaire retire des tokens.
     */
    function withdraw(uint256 amount) external {
        require(msg.sender == owner, "Uniquement le proprietaire");
        require(token.balanceOf(address(this)) >= amount, "Fonds insuffisants");
        token.transfer(owner, amount);
    }

    function getMultipliers() external view returns (uint256[] memory) {
        return multipliers;
    }

    function setMultipliers(uint256[] calldata newMultipliers) external {
        require(msg.sender == owner, "Uniquement le proprietaire");
        multipliers = newMultipliers;
    }
}

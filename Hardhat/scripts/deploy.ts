import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Déploiement avec l'adresse :", deployer.address);

    // 🏆 Déploiement du Token ERC-20 (Hetic)
    const Token = await ethers.getContractFactory("Hetic"); // Remplace par le nom exact du contrat ERC-20
    const token = await Token.deploy();
    await token.deployed();
    console.log("Token Hetic déployé à :", token.address);

    // 📌 Optionnel : Mint des tokens au deployer
    const mintAmount = ethers.utils.parseUnits("1000", 18); // 1000 tokens
    await token.mint(deployer.address, mintAmount);
    console.log("Mint de 1000 tokens pour le deployer.");

    // 🎲 Déploiement du contrat Gambling avec l'adresse du Token
    const Gambling = await ethers.getContractFactory("Gambling");
    const gambling = await Gambling.deploy(token.address);
    await gambling.deployed();
    console.log("Gambling déployé à :", gambling.address);

    // 📌 Optionnel : Approvisionner le contrat Gambling avec 500 tokens
    const depositAmount = ethers.utils.parseUnits("500", 18);
    await token.transfer(gambling.address, depositAmount);
    console.log("500 tokens envoyés au contrat Gambling.");

    console.log("✅ Déploiement terminé !");
}

// 🏁 Exécuter le script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Erreur lors du déploiement :", error);
        process.exit(1);
    });

"use client";

import { useState } from "react";
import { ethers } from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useWriteContract, useReadContract } from "wagmi";
import styles from "./page.module.css";
import GamblingAbi from "../../../public/ABI/Gambling.json";
import HeticAbi from "../../../public/ABI/Hetic.json";

// On force le typage des ABI pour Wagmi
const gamblingAbi = GamblingAbi.abi;
const heticAbi = HeticAbi.abi;

// Chemins vers les images
const logo = "/images/ethereum-eth-logo-diamond-purple.svg";
const cardimg = "/images/CrossyRoadlogo.png";

// Adresses des contrats (assure-toi qu'elles correspondent aux adresses déployées sur ton réseau)
const gamblingAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Gambling
const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Hetic (ERC20)

export default function GamblingPage() {
  // Valeur par défaut à "0.1" pour éviter 0
  const [betAmount, setBetAmount] = useState("0.1");
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false, false]);
  const [isApproved, setIsApproved] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { address, isConnected } = useAccount();
  const { writeContract } = useWriteContract();

  // Lecture du solde du token Hetic de l'utilisateur avec une fonction refetch
  const { data: tokenBalance, refetch } = useReadContract({
    address: tokenAddress,
    abi: heticAbi,
    functionName: "balanceOf",
    args: [address],
  });
  // On formate le solde avec 18 décimales
  const formattedBalance = tokenBalance ? ethers.formatUnits(tokenBalance, 18) : "0.00";

  // Bouton pour mint des tokens Hetic (utile en test)
  const handleMint = async () => {
    if (!address) return;
    try {
      setError(null);
      setIsProcessing(true);
      await writeContract({
        address: tokenAddress,
        abi: heticAbi,
        functionName: "mint",
        args: [address, BigInt(100n * 10n ** 18n)], // Mint 100 tokens (en wei)
      });
      console.log("Mint successful");
      await refetch(); // Rafraîchir le solde après mint
    } catch (error) {
      setError("Échec du mint. Vérifiez votre transaction.");
      console.error("Mint failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Fonction pour approuver le contrat Gambling à dépenser des tokens Hetic
  const handleApprove = async () => {
    if (isProcessing) return;

    const parsedAmount = Number(betAmount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError("L'approbation nécessite un montant valide.");
      return;
    }

    // Conversion en wei avec ethers (si le token a 18 décimales)
    const amountBN = ethers.parseUnits(betAmount, 18);
    const amount = BigInt(amountBN.toString());

    try {
      setError(null);
      setIsProcessing(true);

      await writeContract({
        address: tokenAddress,
        abi: heticAbi,
        functionName: "approve",
        args: [gamblingAddress, amount],
      });

      setIsApproved(true);
      console.log("Approval successful");
    } catch (error) {
      setError("Échec de l'approbation. Vérifiez votre transaction.");
      console.error("Approval failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Fonction appelée lors du clic sur une carte pour parier
  const handleCardClick = async (cardIndex: number) => {
    if (isProcessing) return;
    if (!isApproved) {
      setError("Token non approuvé. Veuillez approuver d'abord.");
      return;
    }

    const parsedAmount = Number(betAmount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError("Le montant du pari doit être supérieur à 0.");
      return;
    }

    if (!address) {
      setError("Aucune adresse connectée.");
      return;
    }

    // Conversion en wei avec ethers
    const amountBN = ethers.parseUnits(betAmount, 18);
    const amount = BigInt(amountBN.toString());
    if (amount === 0n) {
      setError("Le montant converti est 0. Veuillez entrer un montant valide.");
      return;
    }

    try {
      setError(null);
      setIsProcessing(true);

      await writeContract({
        address: gamblingAddress,
        abi: gamblingAbi,
        functionName: "bet",
        args: [amount, cardIndex],
        gasLimit: BigInt(300000),
      });
      console.log("Bet successful");

      // On flip visuellement la carte
      setFlippedCards((prev) => {
        const newFlips = [...prev];
        newFlips[cardIndex] = !newFlips[cardIndex];
        return newFlips;
      });
      
      await refetch(); // Rafraîchir le solde après le pari
    } catch (error) {
      setError("Échec du pari. Vérifiez votre transaction.");
      console.error("Bet failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isConnected) {
    return (
      <div className={styles.container}>
        <ConnectButton />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Barre de balance affichant le solde du token */}
      <div className={styles.balance}>
        <img className={styles.logo_eth} src={logo} alt="Ethereum Logo" />
        <span>{formattedBalance} BTC</span>
        <button className={styles.add_balance}>+</button>
      </div>

      {/* Bouton pour mint (pour les tests, si l'utilisateur n'a pas de tokens) */}
      <button onClick={handleMint} className={styles.mintButton} disabled={isProcessing}>
        {isProcessing ? "Minting..." : "Mint tokens"}
      </button>

      {/* Champ pour saisir le montant à miser */}
      <div className={styles.betInputContainer}>
        <label htmlFor="betAmount">Montant à miser :</label>
        <input
          id="betAmount"
          type="number"
          value={betAmount}
          onChange={(e) => setBetAmount(e.target.value)}
          min="0"
        />
      </div>

      {/* Bouton d'approbation si le token n'est pas approuvé */}
      {!isApproved && (
        <button
          onClick={handleApprove}
          className={styles.approveButton}
          disabled={isApproved || isProcessing}
        >
          {isProcessing ? "En cours..." : "Approuver les tokens"}
        </button>
      )}

      {/* Affichage des messages d'erreur */}
      {error && <p className={styles.errorMessage}>{error}</p>}

      {/* Zone du jeu avec 4 cartes */}
      <div className={styles.game}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={styles.cardContainer}>
            <div
              className={`${styles.card} ${flippedCards[i] ? styles.flipped : ""}`}
              onClick={() => handleCardClick(i)}
            >
              <div className={styles.front}>
                <img className={styles.crossy_logo} src={cardimg} alt="Crossy Road Logo" />
              </div>
              <div className={styles.back}>
                <span>
                  {i === 0 ? "x2.5" : i === 1 ? "x2.0" : i === 2 ? "x3.0" : "x1.5"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Texte explicatif */}
      <p className={styles.text}>Choisissez une carte et découvrez votre multiplicateur</p>
    </div>
  );
}

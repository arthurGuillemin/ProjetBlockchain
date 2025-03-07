"use client";

import { useState } from "react";
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

// Adresses des contrats
const gamblingAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export default function GamblingPage() {
  const [betAmount, setBetAmount] = useState("0");
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false, false]);
  const [isApproved, setIsApproved] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { address, isConnected } = useAccount();
  const { writeContract } = useWriteContract();

  const {data : balance} = useReadContract({
    abi: heticAbi,
    functionName: "balanceOf",
    address: tokenAddress,
    args: [address],
  });
  console.log(balance)
  if (!address) {
    return <ConnectButton />;
  }

  const handleClick = () => {
    writeContract({
      abi: heticAbi,
      functionName: "mint",
      address: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
      args: [address, 100n],
    })
  }


  const handleApprove = async () => {
    if (isProcessing) return;

    const parsedAmount = Number(betAmount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError("L'approbation nécessite un montant valide.");
      return;
    }

    const amount = BigInt(Math.floor(parsedAmount * 10 ** 18));

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

    const amount = BigInt(Math.floor(parsedAmount * 10 ** 18));

    try {
      setError(null);
      setIsProcessing(true);

      await writeContract({
        address: gamblingAddress,
        abi: gamblingAbi,
        functionName: "bet",
        args: [amount, cardIndex],
      });

      console.log("Bet successful");

      setFlippedCards((prev) => {
        const newFlips = [...prev];
        newFlips[cardIndex] = !newFlips[cardIndex];
        return newFlips;
      });
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
      <div className={styles.balance}>
        <img className={styles.logo_eth} src={logo} alt="Ethereum Logo" />
        <span style={{color:'#FFFFF'}}>{balance?.toString()}</span>
        <button className={styles.add_balance}>+</button>
      </div>
      <button onClick={handleClick}>mint</button>
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

      {!isApproved && (
        <button 
          onClick={handleApprove} 
          className={styles.approveButton} 
          disabled={isApproved || isProcessing}
        >
          {isProcessing ? "En cours..." : "Approuver les tokens"}
        </button>
      )}

      {error && <p className={styles.errorMessage}>{error}</p>}

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
                  {i === 0
                    ? "x2.5"
                    : i === 1
                    ? "x2.0"
                    : i === 2
                    ? "x3.0"
                    : "x1.5"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className={styles.text}>Choisissez une carte et découvrez votre multiplicateur</p>
    </div>
  );
}

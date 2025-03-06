"use client";

import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useWriteContract } from "wagmi";
import styles from "./page.module.css";
import GamblingAbi from "../../../public/ABI/Gambling.json";
import HeticAbi from "../../../public/ABI/Hetic.json";
import { useReadContract } from "wagmi";


// On force le typage de l'ABI pour Wagmi
const gamblingAbi = GamblingAbi.abi as unknown as readonly unknown[];
const heticAbi = HeticAbi.abi as unknown as readonly unknown[];

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

  const { address } = useAccount();
  const { writeContract } = useWriteContract(); 

  const handleApprove = async () => {
    const amount = BigInt(Math.floor(Number(betAmount) * 10 ** 18));
    if (amount <= 0) {
      console.error("L'approbation nécessite un montant valide.");
      return;
    }
  
    try {
      await writeContract({
        address: tokenAddress,
        abi: heticAbi,
        functionName: "approve",
        args: [gamblingAddress, amount],
      });
      console.log("Approval successful");
      setIsApproved(true);
      
    } catch (error) {
      console.error("Approval failed:", error);
    }
  };
  

  const handleCardClick = async (cardIndex: number) => {
    setFlippedCards((prev) => {
      const newFlips = [...prev];
      newFlips[cardIndex] = !newFlips[cardIndex];
      return newFlips;
    });

    if (!isApproved) {
      console.error("Token non approuvé. Veuillez approuver d'abord.");
      return;
    }

    const amount = BigInt(Math.floor(Number(betAmount) * 10 ** 18));
    if (amount <= 0) {
      console.error("Le montant du pari doit être supérieur à 0.");
      return;
    }

    try {
      await writeContract({
        address: gamblingAddress,
        abi: gamblingAbi,
        functionName: "bet",
        args: [amount, cardIndex],
      });
      console.log("Bet successful");
    } catch (error) {
      console.error("Bet failed:", error);
    }
  };

  if (!address) {
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
        <span>0.00 ETH</span>
        <button className={styles.add_balance}>+</button>
      </div>

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
        <button onClick={handleApprove} className={styles.approveButton} disabled={isApproved}>
          Approve Tokens
        </button>
      )}

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

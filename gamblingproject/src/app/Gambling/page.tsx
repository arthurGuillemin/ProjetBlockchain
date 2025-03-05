"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

export default function GamblingPage() {
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach((card) => {
      card.addEventListener("click", function () {
        card.classList.toggle(styles.flipped);
      });
    });
  }, []);

  return (
    <div>
      <div className={styles.balance}>
        <img
          className={styles.logo_eth}
          src="/images/ethereum-eth-logo-diamond-purple.svg" 
          alt="Ethereum Logo"
        />
        <span>0.00 ETH</span>
        <button className={styles.add_balance}>+</button>
      </div>

      <div className={styles.game}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={styles.container}>
            <div className={styles.card}>
              <div className={styles.front}>
                <img
                  className={styles.crossy_logo}
                  src="/images/CrossyRoadlogo.png"
                  alt="Crossy Road Logo"
                />
              </div>
              <div className={styles.back}>
                <span>x2.5</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className={styles.text}>
        Choisissez une carte et découvrez votre multiplicateur
      </p>
    </div>
  );
}

import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { getAddress } from "viem";

describe("Gambling", function () {
  async function deployGamblingFixture() {
    const [owner, player, otherAccount] = await hre.viem.getWalletClients();

    const ERC20 = await hre.viem.deployContract("Hetic");

    const Gambling = await hre.viem.deployContract("Gambling", [ERC20.address]);

    const publicClient = await hre.viem.getPublicClient();

    return {
      ERC20,
      Gambling,
      owner,
      player,
      otherAccount,
      publicClient,
    };
  }

  describe("Test Gambling", function () {
    it("Should mint tokens, deposit, bet, and withdraw correctly", async function () {
      const { ERC20, Gambling, owner, player, otherAccount } = await loadFixture(deployGamblingFixture);

      // mint 100 tokens pour le player et 100 tokens puor owner
      await ERC20.write.mint([player.account.address, 100n]);
      await ERC20.write.mint([owner.account.address, 100n]);

      // on verrifie les balances des joueurs
      const playerBalance = await ERC20.read.balanceOf([player.account.address]);
      expect(playerBalance).to.equal(100n);
      const ownerBalance = await ERC20.read.balanceOf([owner.account.address]);
      expect(ownerBalance).to.equal(100n);

      // on approuve le contrat Gambling pour 50 tokens
      await ERC20.write.approve([Gambling.address, 50n], {
        account: owner.account,
      });
      await Gambling.write.deposit([50n], {
        account: owner.account,
      });

      // on verrifie la balance du contrat Gambling
      const contractBalance = await ERC20.read.balanceOf([Gambling.address]);
      expect(contractBalance).to.equal(50n);

      // on verrifie la balance du owner
      await ERC20.write.approve([Gambling.address, 10n], {
        account: player.account,
      });

      // le player place un pari de 10 tokens avec 50% de chance de gagner
      // la transaction doit réussir et émettre un événement (on vérifie ici qu'elle retourne bien un hash de tx)
      
      const betTx = await Gambling.write.bet([10n, 50], {
        account: player.account,
      });
      expect(betTx).to.exist;

      //check si un autre compte (sans approbation) tente de miser, l'appel doit être rejeté
      await expect(
        Gambling.write.bet([10n, 50], {
          account: otherAccount.account,
        })
      ).to.be.rejectedWith("ERC20InsufficientAllowance");

      // test du retrait par l'owner : l'owner retire 20 tokens du contrat Gambling
      await Gambling.write.withdraw([20n], {
        account: owner.account,
      });

      // on  un retrait initié par un compte non-propriétaire  (doit être rejeté)
      await expect(
        Gambling.write.withdraw([10n], {
          account: player.account,
        })
      ).to.be.rejectedWith("Uniquement le proprietaire"); 
    });
  });
});

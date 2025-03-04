import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const GamblingModule = buildModule("GamblingModule", (m) => {
    const erc20 = m.contract("Hetic"); // deploi ERC20 Hetic
    const gambling = m.contract("Gambling", [erc20]); // deploi Gambling avec ERC20
    return { erc20, gambling };
});

export default GamblingModule;

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet , localhost, hardhat} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Web app Hetic",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet , hardhat],

  ssr: true, // If your dApp uses server side rendering (SSR)
});
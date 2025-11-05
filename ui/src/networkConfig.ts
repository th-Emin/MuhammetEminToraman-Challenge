import { getFullnodeUrl } from "@mysten/sui/client";
import { createNetworkConfig } from "@mysten/dapp-kit";

const PACKAGE_ID = "0x05c0b9c0345484394dc93175406af979fec719c6ded17b82051e34aa880a15a4";

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
      variables: { packageId: PACKAGE_ID },
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: { packageId: PACKAGE_ID },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: { packageId: PACKAGE_ID },
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };

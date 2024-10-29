// src/utils/wallet.js
import { AptosClient, AptosAccount, TokenClient } from "@aptos-labs/aptos";

const client = new AptosClient("https://fullnode.testnet.aptoslabs.com/v1");

export const connectWallet = async () => {
  try {
    const { address } = await window.aptos.connect();
    return address;
  } catch (error) {
    console.error("Failed to connect wallet:", error);
    return null;
  }
};

export const getAccount = () => {
  return new AptosAccount();
};

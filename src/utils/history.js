// src/utils/history.js
import { AptosClient } from "@aptos-labs/aptos";

export const getTransactionHistory = async (address) => {
  try {
    const transactions = await client.getAccountTransactions(address);
    return transactions;
  } catch (error) {
    console.error("Failed to fetch transaction history:", error);
    return [];
  }
};

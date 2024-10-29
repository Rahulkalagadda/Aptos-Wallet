// src/utils/token.js
import { TokenClient } from "@aptos-labs/aptos";

const tokenClient = new TokenClient(client);

export const sendTokens = async (fromAddress, toAddress, amount) => {
  try {
    const transaction = await tokenClient.transfer(fromAddress, toAddress, amount);
    console.log("Transaction successful:", transaction);
    return transaction;
  } catch (error) {
    console.error("Failed to send tokens:", error);
    return null;
  }
};

import { AptosAccount } from 'aptos';

export const createAccount = () => {
    const account = new AptosAccount();
    return account;
};

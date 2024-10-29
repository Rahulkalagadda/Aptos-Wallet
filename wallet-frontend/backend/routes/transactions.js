const express = require('express');
const axios = require('axios');
const router = express.Router();

const APTOS_API_URL = process.env.APTOS_API_URL;
const FAUCET_URL = process.env.FAUCET_URL;

router.post('/send', async (req, res) => {
  const { sender, receiver, amount } = req.body;
  
  try {
    const response = await axios.post(`${APTOS_API_URL}/transactions`, {
      sender, receiver, amount
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Transaction failed', error });
  }
});

module.exports = router;

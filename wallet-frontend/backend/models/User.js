const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  mnemonic: {
    type: String,
    required: true, // Mnemonic phrase for account recovery
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the User model
module.exports = mongoose.model('User', userSchema);

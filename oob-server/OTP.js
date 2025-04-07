const crypto = require('crypto');

function generateNumericOTP(length = 4) {
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += crypto.randomInt(0, 10); // Generates a random integer between 0 and 9
  }
  return otp;
}

// Example usage:
module.exports = generateNumericOTP; // export the function.

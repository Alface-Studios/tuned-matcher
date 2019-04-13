const fs = require('fs');
const jwt = require('jsonwebtoken');

class authentication {
  constructor() {
    this.authSecret = JSON.parse(fs.readFileSync('./config/config.json')).authSecret;
  }

  getSecret() {
    return this.authSecret;
  }

  signToken(entity) {
    return jwt.sign(entity, this.authSecret, {expiresIn: 3600});
  }

}

module.exports = new authentication();
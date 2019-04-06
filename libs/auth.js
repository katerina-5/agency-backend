const jwt = require('jsonwebtoken');

module.exports = {
  verifyJWTToken,
  createJWToken,
};

function verifyJWTToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, 'test', (err, decodedToken) => {
      if (err || !decodedToken) {
        return reject(err)
      }

      resolve(decodedToken)
    })
  })
}

function createJWToken(data = {}) {
  const token = jwt.sign({
    ...data
  }, 'test');

  return token
}

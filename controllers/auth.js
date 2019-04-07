const auth = require('../libs/auth');

module.exports = {
  signIn
};

function signIn(req, res, next) {
  const token = auth.createJWToken({
    name: 'qqqqqq',
    group: 'admin',
    ...req.body
  });

  res.send({
    token
  });
}

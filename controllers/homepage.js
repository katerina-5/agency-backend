module.exports = {
  getBase
};

function getBase(req, res, next) {
  res.send('Real Estate Agency REST API.\nThis is a home page.');
}

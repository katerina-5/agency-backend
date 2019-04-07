// const middlewareAuth = require('../middleware/auth');
const home = require('./home');
// const auth = require('./auth');
const contracts = require('./contracts');
const customers = require('./customers');
const interviews = require('./interviews');
const managers = require('./managers');
const payments = require('./payments');
const real_estate_objects = require('./realestateobjects');
const reviews = require('./reviews');
const addresses = require('./addresses');

module.exports = function (app) {
  app.use('/', home);
  // app.use('/', auth);
  //   app.use('/users', [middlewareAuth, users]);
  app.use('/contracts', contracts);
  app.use('/customers', customers);
  // app.use('/customers', [middlewareAuth, customers]);
  app.use('/interviews', interviews);
  app.use('/managers', managers);
  // app.use('/managers', [middlewareAuth, managers]);
  app.use('/payments', payments);
  app.use('/realestateobjects', real_estate_objects);
  app.use('/reviews', reviews);
  app.use('/addresses', addresses);
};

const pool = require('./../config/postgresql').pool;

module.exports = {
  contract_list,
  contract_detail,
  contract_create,
  contract_update,
  contract_delete
};

// Display list of all contracts.
function contract_list(request, response, next) {
  console.log('List of contracts');
}

// Display detail page for a specific contract.
function contract_detail(request, response, next) {
  console.log('Contract detail');
}

// Contract create on POST.
function contract_create(request, response, next) {
  console.log('Contract create');
}

// Contract delete on DELETE.
function contract_delete(request, response, next) {
  console.log('Contract delete');
}

// Contract update on PUT.
function contract_update(request, response, next) {
  console.log('Contract update');
}

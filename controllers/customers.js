const pool = require('./../config/postgresql').pool;

module.exports = {
  customer_list,
  customer_detail,
  customer_create,
  customer_delete,
  customer_update
};

// Display list of all customers.
function customer_list(request, response, next) {
  console.log('List of customers');
}

// Display detail page for a specific customer.
function customer_detail(request, response, next) {
  console.log('Customer detail');
}

// customer create on POST.
function customer_create(request, response, next) {
  console.log('Customer create');
}

// customer delete on DELETE.
function customer_delete(request, response, next) {
  console.log('Customer delete');
}

// Handle customer update on POST.
function customer_update(request, response, next) {
  console.log('Customer update');
}

const pool = require('./../config/postgresql').pool;

module.exports = {
  payment_list,
  payment_detail,
  payment_create,
  payment_delete,
  payment_update
};

// Display list of all payments.
function payment_list(request, response, next) {
  console.log('List of payments');
}

// Display detail page for a specific payment.
function payment_detail(request, response, next) {
  console.log('Payment detail');
}

// payment create on POST.
function payment_create(request, response, next) {
  console.log('Payment create');
}

// payment delete on DELETE.
function payment_delete(request, response, next) {
  console.log('Payment delete');
}

// payment update on PUT.
function payment_update(request, response, next) {
  console.log('Payment update');
}

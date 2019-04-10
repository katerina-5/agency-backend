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

  pool.query('SELECT * FROM customers', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

// Display detail page for a specific customer.
function customer_detail(request, response, next) {
  console.log('Customer detail');

  const cust_id = request.params.id;

  pool.query('SELECT * FROM customers WHERE cust_id = $1', [cust_id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

// customer create on POST.
function customer_create(request, response, next) {
  console.log('Customer create');

  const { zip_code, surname, name, father_name, phone, e_mail, login, password } = request.body;

  pool.query('INSERT INTO customers(zip_code, surname, name, father_name, phone, e_mail, login, password) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
    [zip_code, surname, name, father_name, phone, e_mail, login, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

// customer delete on DELETE.
function customer_delete(request, response, next) {
  console.log('Customer delete');

  const cust_id = request.params.id;

  pool.query('DELETE FROM customers WHERE cust_id = $1',
    [cust_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

// Handle customer update on POST.
function customer_update(request, response, next) {
  console.log('Customer update');

  const cust_id = request.params.id;
  const { zip_code, surname, name, father_name, phone, e_mail, login, password } = request.body;

  pool.query('UPDATE customers SET zip_code = $2, surname = $3, name = $4, father_name = $5, phone = $6, e_mail = $7, login = $8, password = $9 WHERE cust_id = $1',
    [cust_id, zip_code, surname, name, father_name, phone, e_mail, login, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

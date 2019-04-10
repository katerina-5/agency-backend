const pool = require('./../config/postgresql').pool;

module.exports = {
  realestateobject_list,
  realestateobject_detail,
  realestateobject_create,
  realestateobject_delete,
  realestateobject_update
};

// Display list of all realestateobjects.
function realestateobject_list(request, response, next) {
  console.log('List of real estate objects');

  pool.query('SELECT * FROM real_estate_objects', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

// Display detail page for a specific realestateobject.
function realestateobject_detail(request, response, next) {
  console.log('Real estate object detail');

  const obj_id = request.params.id;

  pool.query('SELECT * FROM real_estate_objects WHERE obj_id = $1', [obj_id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

// realestateobject create on POST.
function realestateobject_create(request, response, next) {
  console.log('Real estate object create');

  const { zip_code, emp_id, cust_id, square, rent_price, room_count, storeys_count } = request.body;

  pool.query('INSERT INTO real_estate_objects(zip_code, emp_id, cust_id, square, rent_price, room_count, storeys_count) VALUES($1, $2, $3, $4, $5, $6, $7)',
    [zip_code, emp_id, cust_id, square, rent_price, room_count, storeys_count],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

// realestateobject delete on DELETE.
function realestateobject_delete(request, response, next) {
  console.log('Real estate object delete');

  const obj_id = request.params.id;

  pool.query('DELETE FROM real_estate_objects WHERE obj_id = $1', [obj_id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

// realestateobject update on PUT.
function realestateobject_update(request, response, next) {
  console.log('Real estate object update');

  const obj_id = request.params.id;
  const { zip_code, emp_id, cust_id, square, rent_price, room_count, storeys_count } = request.body;

  pool.query('UPDATE real_estate_objects SET zip_code = $2, emp_id = $3, cust_id = $4, square = $5, rent_price = $6, room_count = $7, storeys_count = $8 WHERE obj_id = $1',
    [obj_id, zip_code, emp_id, cust_id, square, rent_price, room_count, storeys_count],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

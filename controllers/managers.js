const pool = require('./../config/postgresql').pool;

module.exports = {
  manager_list,
  manager_detail,
  manager_create,
  manager_delete,
  manager_update
};

// Display list of all managers.
function manager_list(request, response, next) {
  console.log('List of managers');

  pool.query('SELECT * FROM managers', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

// Display detail page for a specific manager.
function manager_detail(request, response, next) {
  console.log('Manager detail');

  const emp_id = request.params.id;

  pool.query('SELECT * FROM managers WHERE emp_id = $1', [emp_id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

// manager create on POST.
function manager_create(request, response, next) {
  console.log('Manager create');

  const { login, password, surname, name, father_name, phone, post } = request.body;

  pool.query('INSERT INTO managers(login, password, surname, name, father_name, phone, post) VALUES($1, $2, $3, $4, $5, $6, $7)',
    [login, password, surname, name, father_name, phone, post],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

// manager delete on DELETE.
function manager_delete(request, response, next) {
  console.log('Manager delete');

  const emp_id = request.params.id;

  pool.query('DELETE FROM managers WHERE emp_id = $1', [emp_id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

// manager update on PUT.
function manager_update(request, response, next) {
  console.log('Manager update');

  const emp_id = request.params.id;
  const { login, password, surname, name, father_name, phone, post } = request.body;

  pool.query('UPDATE managers SET login = $2, password = $3, surname = $4, name = $5, father_name = $6, phone = $7, post = $8 WHERE emp_id = $1',
    [emp_id, login, password, surname, name, father_name, phone, post],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

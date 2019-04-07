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
}

// Display detail page for a specific manager.
function manager_detail(request, response, next) {
  console.log('Manager detail');
}

// manager create on POST.
function manager_create(request, response, next) {
  console.log('Manager create');
}

// manager delete on DELETE.
function manager_delete(request, response, next) {
  console.log('Manager delete');
}

// manager update on PUT.
function manager_update(request, response, next) {
  console.log('Manager update');
}

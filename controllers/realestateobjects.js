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
}

// Display detail page for a specific realestateobject.
function realestateobject_detail(request, response, next) {
  console.log('Real estate object detail');
}

// realestateobject create on POST.
function realestateobject_create(request, response, next) {
  console.log('Real estate object create');
}

// realestateobject delete on DELETE.
function realestateobject_delete(request, response, next) {
  console.log('Real estate object delete');
}

// realestateobject update on PUT.
function realestateobject_update(request, response, next) {
  console.log('Real estate object update');
}

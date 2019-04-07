const pool = require('./../config/postgresql').pool;

module.exports = {
    apartment_category_list,
    apartment_category_detail,
    apartment_category_create,
    apartment_category_update,
    apartment_category_delete
}

function apartment_category_list(request, response, next) {
    console.log("List of apartment categories");
}

function apartment_category_detail(request, response, next) {
    console.log("Apartment category detail");
}

function apartment_category_create(request, response, next) {
    console.log("Apartment category create");
}

function apartment_category_update(request, response, next) {
    console.log("Apartment category update");
}

function apartment_category_delete(request, response, next) {
    console.log("Apartment category delete");
}

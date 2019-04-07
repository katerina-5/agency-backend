const pool = require('./../config/postgresql').pool;

module.exports = {
    house_category_list,
    house_category_detail,
    house_category_create,
    house_category_update,
    house_category_delete
}

function house_category_list(request, response, next) {
    console.log("List of house_categories");
}

function house_category_detail(request, response, next) {
    console.log("House category detail");
}

function house_category_create(request, response, next) {
    console.log("House category create");
}

function house_category_update(request, response, next) {
    console.log("House category update");
}

function house_category_delete(request, response, next) {
    console.log("House category delete");
}

const pool = require('./../config/postgresql').pool;

module.exports = {
    office_category_list,
    office_category_detail,
    office_category_create,
    office_category_update,
    office_category_delete
}

function office_category_list(request, response, next) {
    console.log("List of office categories");
}

function office_category_detail(request, response, next) {
    console.log("Office category detail");
}

function office_category_create(request, response, next) {
    console.log("Office category create");
}

function office_category_update(request, response, next) {
    console.log("Office category update");
}

function office_category_delete(request, response, next) {
    console.log("Office category delete");
}

const pool = require('./../config/postgresql').pool;

module.exports = {
    office_list,
    office_detail,
    office_create,
    office_update,
    office_delete
}

function office_list(request, response, next) {
    console.log("List of offices");
}

function office_detail(request, response, next) {
    console.log("Office detail");
}

function office_create(request, response, next) {
    console.log("Office create");
}

function office_update(request, response, next) {
    console.log("Office update");
}

function office_delete(request, response, next) {
    console.log("Office delete");
}

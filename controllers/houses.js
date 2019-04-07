const pool = require('./../config/postgresql').pool;

module.exports = {
    house_list,
    house_detail,
    house_create,
    house_update,
    house_delete
}

function house_list(request, response, next) {
    console.log("List of houses");
}

function house_detail(request, response, next) {
    console.log("House detail");
}

function house_create(request, response, next) {
    console.log("House create");
}

function house_update(request, response, next) {
    console.log("House update");
}

function house_delete(request, response, next) {
    console.log("House delete");
}

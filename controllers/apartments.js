const pool = require('./../config/postgresql').pool;

module.exports = {
    apartment_list,
    apartment_detail,
    apartment_create,
    apartment_update,
    apartment_delete
}

function apartment_list(request, response, next) {
    console.log("List of apartments");
}

function apartment_detail(request, response, next) {
    console.log("Apartment detail");
}

function apartment_create(request, response, next) {
    console.log("Apartment create");
}

function apartment_update(request, response, next) {
    console.log("Apartment update");
}

function apartment_delete(request, response, next) {
    console.log("Apartment delete");
}

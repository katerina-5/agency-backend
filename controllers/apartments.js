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

    pool.query('SELECT * FROM apartments', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

function apartment_detail(request, response, next) {
    console.log("Apartment detail");

    const obj_id = request.params.id;

    pool.query('SELECT * FROM apartments WHERE obj_id = $1', [obj_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

function apartment_create(request, response, next) {
    console.log("Apartment create");

    const { obj_id, a_cat_id, zip_code, emp_id, square, rent_price, room_count, storeys_count, floor_number } = request.body;

    pool.query('INSERT INTO apartments(obj_id, a_cat_id, zip_code, emp_id, square, rent_price, room_count, storeys_count, floor_number) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [obj_id, a_cat_id, zip_code, emp_id, square, rent_price, room_count, storeys_count, floor_number],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(results.rows);
        });
}

function apartment_update(request, response, next) {
    console.log("Apartment update");

    const obj_id = request.params.id;
    const { a_cat_id, zip_code, emp_id, square, rent_price, room_count, storeys_count, floor_number } = request.body;

    // let query = 'UPDATE apartments SET a_cat_id = $2, zip_code = $3, emp_id = $4, square = $5, rent_price = $6, room_count = $7, storeys_count = $8, floor_number = $9 WHERE obj_id = $1;';
    // query += 'UPDATE real_estate_objects SET zip_code = $3, emp_id = $4, square = $5, rent_price = $6, room_count = $7, storeys_count = $8 WHERE obj_id = $1';

    pool.query('UPDATE apartments SET a_cat_id = $2, zip_code = $3, emp_id = $4, square = $5, rent_price = $6, room_count = $7, storeys_count = $8, floor_number = $9 WHERE obj_id = $1',
        [obj_id, a_cat_id, zip_code, emp_id, square, rent_price, room_count, storeys_count, floor_number],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(results.rows);
        });
}

function apartment_delete(request, response, next) {
    console.log("Apartment delete");

    const obj_id = request.params.id;

    pool.query('DELETE FROM apartments WHERE obj_id = $1', [obj_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const pool = require('./../config/postgresql').pool;

module.exports = {
    address_list,
    address_detail,
    address_create,
    address_delete,
    address_update
};

// Display list of all addresss.
function address_list(request, response, next) {
    console.log('List of addresses');

    pool.query('SELECT * FROM addresses ORDER BY zip_code', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

// Display detail page for a specific address.
function address_detail(request, response, next) {
    console.log('Address detail');

    const zip_code = parseInt(request.params.id);

    pool.query('SELECT * FROM addresses WHERE zip_code = $1', [zip_code], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

// Handle address create on POST.
function address_create(request, response, next) {
    console.log('Address create');

    const { zip_code, city, region, street, addressline1, addressline2 } = request.body;

    pool.query('INSERT INTO addresses(ZIP_code, city, region, street, addressline1, addressline2) VALUES($1, $2, $3, $4, $5, $6)',
        [zip_code, city, region, street, addressline1, addressline2],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(results.rows);
        });
}

// Handle address delete on DELETE.
function address_delete(request, response, next) {
    console.log('Address delete');

    const zip_code = request.params.id;

    pool.query('DELETE FROM addresses WHERE zip_code = $1', [zip_code], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

// Handle address update on PUT.
function address_update(request, response, next) {
    console.log('Address update');

    const zip_code = request.params.id;
    const { city, region, street, addressline1, addressline2 } = request.body;

    pool.query('UPDATE addresses SET city = $2, region = $3, street = $4, addressline1 = $5, addressline2 = $6 WHERE zip_code = $1',
        [zip_code, city, region, street, addressline1, addressline2],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(results.rows);
        });
}

const pool = require('./../config/postgresql').pool;

module.exports = {
    apartment_category_list,
    apartment_category_detail,
    apartment_category_create,
    apartment_category_update,
    apartment_category_delete
}

// 'SELECT * FROM apartment_categories ORDER BY a_cat_id'
function apartment_category_list(request, response, next) {
    console.log("List of apartment categories");

    pool.query('SELECT * FROM apartment_categories', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

function apartment_category_detail(request, response, next) {
    console.log("Apartment category detail");

    const a_cat_id = request.params.id;

    pool.query('SELECT * FROM apartment_categories WHERE a_cat_id = $1', [a_cat_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

function apartment_category_create(request, response, next) {
    console.log("Apartment category create");

    const { title } = request.body;

    pool.query('INSERT INTO apartment_categories(title) VALUES($1)', [title], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

function apartment_category_update(request, response, next) {
    console.log("Apartment category update");

    const a_cat_id = request.params.id;
    const { title } = request.body;

    pool.query('UPDATE apartment_categories SET title = $2 WHERE a_cat_id = $1', [a_cat_id, title], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

function apartment_category_delete(request, response, next) {
    console.log("Apartment category delete");

    const a_cat_id = request.params.id;

    pool.query('DELETE FROM apartment_categories WHERE a_cat_id = $1', [a_cat_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

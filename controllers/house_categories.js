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

    pool.query('SELECT * FROM house_categories', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

function house_category_detail(request, response, next) {
    console.log("House category detail");

    const h_cat_id = request.params.id;

    pool.query('SELECT * FROM house_categories WHERE h_cat_id = $1', [h_cat_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

function house_category_create(request, response, next) {
    console.log("House category create");

    const { title } = request.body;

    pool.query('INSERT INTO house_categories(title) VALUES($1)', [title], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

function house_category_update(request, response, next) {
    console.log("House category update");

    const h_cat_id = request.params.id;
    const { title } = request.body;

    pool.query('UPDATE house_categories SET title = $2 WHERE h_cat_id = $1', [h_cat_id, title], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

function house_category_delete(request, response, next) {
    console.log("House category delete");

    const h_cat_id = request.params.id;

    pool.query('DELETE FROM house_categories WHERE h_cat_id = $1', [h_cat_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

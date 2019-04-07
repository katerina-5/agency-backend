const pool = require('./../config/postgresql').pool;

module.exports = {
    office_category_list,
    office_category_detail,
    office_category_create,
    office_category_update,
    office_category_delete
}

function office_category_list(request, response, next) {
    console.log("List of office_categories");

    pool.query('SELECT * FROM office_categories', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

function office_category_detail(request, response, next) {
    console.log("Office category detail");

    const o_cat_id = request.params.id;

    pool.query('SELECT * FROM office_categories WHERE o_cat_id = $1', [o_cat_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

function office_category_create(request, response, next) {
    console.log("Office category create");

    const { title } = request.body;

    pool.query('INSERT INTO office_categories(title) VALUES($1)', [title], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

function office_category_update(request, response, next) {
    console.log("Office category update");

    const o_cat_id = request.params.id;
    const { title } = request.body;

    pool.query('UPDATE office_categories SET title = $2 WHERE o_cat_id = $1', [o_cat_id, title], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

function office_category_delete(request, response, next) {
    console.log("Office category delete");

    const o_cat_id = request.params.id;

    pool.query('DELETE FROM office_categories WHERE o_cat_id = $1', [o_cat_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

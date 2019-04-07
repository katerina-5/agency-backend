const pool = require('./../config/postgresql').pool;

module.exports = {
  review_list,
  review_detail,
  review_create,
  review_delete,
  review_update
};

// Display list of all reviews.
function review_list(request, response, next) {
  console.log('List of reviews');
}

// Display detail page for a specific review.
function review_detail(request, response, next) {
  console.log('Review detail');
}

// review create on POST.
function review_create(request, response, next) {
  console.log('Review create');
}

// review delete on DELETE.
function review_delete(request, response, next) {
  console.log('Review delete');
}

// review update on PUT.
function review_update(request, response, next) {
  console.log('Review update');
}

const pool = require('./../config/postgresql').pool;

module.exports = {
  interview_list,
  interview_detail,
  interview_create,
  interview_delete,
  interview_update
};

// Display list of all interviews.
function interview_list(request, response, next) {
  console.log('List of interviews');
}

// Display detail page for a specific interview.
function interview_detail(request, response, next) {
  console.log('Interview detail');
}

// interview create on POST.
function interview_create(request, response, next) {
  console.log('Interview create');
}

// interview delete on DELETE.
function interview_delete(request, response, next) {
  console.log('Interview delete');
}

// interview update on PUT.
function interview_update(request, response, next) {
  console.log('Interview update');
}

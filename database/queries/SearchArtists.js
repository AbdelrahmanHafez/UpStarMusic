const Artist = require('../models/artist');

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 * like this: {all: [artists], count, offset, limit}
 */
const buildQuery = (criteria) => {
  let query = {};

  if (criteria.name) {
    query.$text = { $search: criteria.name };
  }

  if (criteria.age) {
    query.age = {
      $gte: criteria.age.min,
      $lt: criteria.age.max
    };
  }

  if (criteria.yearsActive) {
    query.yearsActive = {
      $gte: criteria.yearsActive.min,
      $lte: criteria.yearsActive.max
    };
  }

  return query;
}

module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {
  let query = buildQuery(criteria);
  let artists = Artist.find(query).sort(sortProperty).skip(offset).limit(limit);
  let count = Artist.count(query);
  return Promise.all([artists, count])
    .then(results => {
      return { all: results[0], count: results[1], offset, limit }
    });
};


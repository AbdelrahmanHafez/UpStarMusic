const Artist = require('../models/artist');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
  let minQuery = Artist.findOne({}).sort('age').then(artist => artist.age);
  let maxQuery = Artist.findOne({}).sort('-age').then(artist => artist.age);
  return Promise.all([minQuery, maxQuery])
    .then(ages => {
      return { min: ages[0], max: ages[1] };
    })
};

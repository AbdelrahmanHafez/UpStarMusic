const Artist = require('../models/artist');

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () => {
  let minQuery = Artist.findOne({}).sort('yearsActive').then(artist => artist.yearsActive);
  let maxQuery = Artist.findOne({}).sort('-yearsActive').then(artist => artist.yearsActive);
  return Promise.all([minQuery, maxQuery])
    .then(yearsActives => {
      return { min: yearsActives[0], max: yearsActives[1] };
    });
};

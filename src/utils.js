const _ = require('lodash');

/**
 * Format a string to title case
 * @param {string} str - The string to format
 * @returns {string} - The formatted string
 */
function toTitleCase(str) {
  return _.startCase(_.toLower(str));
}

/**
 * Generate a random number between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - Random number between min and max
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  toTitleCase,
  getRandomNumber
}; 
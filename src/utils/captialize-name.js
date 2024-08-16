/**
 * Capitalizes the first letter of a word.
 * @param {string} word - The word to capitalize.
 * @returns {string} The word with its first letter capitalized.
 */

const capitalizeFirstLetter = (word) => {
  if (typeof word !== "string" || word.length === 0) {
    return word;
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
};

module.exports = capitalizeFirstLetter;

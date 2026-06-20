/**
 * Removes duplicate values from an array (primitives only)
 * @param {Array} array - The array to deduplicate
 * @returns {Array} - New array with unique values
 */
export const unique = (array) => {
  return [...new Set(array)];
};

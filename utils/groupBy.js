/**
 * Groups array items by a key returned from keyFn
 * @param {Array} array - The array to group
 * @param {Function} keyFn - Function that returns the group key for each item
 * @returns {Object} - Object with keys as group names and values as arrays of items
 */
export const groupBy = (array, keyFn) => {
  const final = array.reduce((grouped, item) => {
    let index = keyFn(item);
    grouped[index] = grouped[index] || [];
    grouped[index].push(item);
    return grouped;
  }, {});
  return final;
};

/**
 * Returns a sorted copy of an array by a key function
 * @param {Array} array - The array to sort
 * @param {Function} keyFn - Function that returns the value to sort by for each item
 * @param {string} [direction] - Sort direction: "asc" (default) or "desc"
 * @returns {Array} - New sorted array (original unchanged)
 */
export const sortBy = (array, keyFn, direction = "asc") => {
  let copy = [...array];
  copy.sort((a, b) => {
    const valA = keyFn(a);
    const valB = keyFn(b);
    if (direction === "desc") {
      return typeof valA === "string" ? valB.localeCompare(valA) : valB - valA;
    } else {
      return typeof valA === "string" ? valA.localeCompare(valB) : valA - valB;
    }
  });
  return copy;
};

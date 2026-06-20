/**
 * Creates a debounced function that delays calling fn until ms after the last call
 * @param {Function} fn - The function to debounce
 * @param {number} ms - Delay in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (fn, ms) => {
  let timerID;

  return (...args) => {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      fn(...args);
    }, ms);
  };
};

/**
 * Creates a throttled function that calls fn at most once per ms
 * @param {Function} fn - The function to throttle
 * @param {number} ms - Minimum interval in milliseconds between calls
 * @returns {Function} - Throttled function
 */
export const throttle = (fn, ms) => {
  let last = 0;

  return (...args) => {
    let curTime = Date.now();
    if (curTime - last > ms) {
      last = Date.now();
      fn(...args);
    }
  };
};

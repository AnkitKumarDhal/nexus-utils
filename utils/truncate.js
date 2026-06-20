/**
 * Truncates the input text according to how many characters specified
 * @param {string} text - Input text
 * @param {number} n - Max Character length
 * @returns {string} - Returns the final truncated string which is the exact length as specified with "..." at the end
 */
export function truncate(text, n) {
  if (text.length > n) {
    return `${text.slice(0, n)}...`;
  } else {
    return `${text}`;
  }
}

/**
 * Makes text usable in URLs (removes special characters, replaces spaces with "-")
 * @param {string} text - Input Text
 * @returns {string} - final output text with the above mentioned changes
 */
export const slugify = (text) => {
  const cleanText = text.trim();
  return cleanText
    .split(" ")
    .map((word) => {
      return word.trim().toLowerCase();
    })
    .join("-")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
};

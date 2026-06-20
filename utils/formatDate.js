/**
 * Formats the date into normal human readable format
 * @param {string} iso - The ISO Date value
 * @param {string} [locale] - Defaults to "en-IN"
 * @returns {string}
 */
export const formatDate = (iso, locale = "en-IN") => {
  const date = new Date(iso);
  return date.toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

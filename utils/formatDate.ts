/**
 * Formats the date into normal human readable format
 */
export const formatDate = (iso: string, locale: string = "en-IN"): string => {
  const date = new Date(iso);
  return date.toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

/**
 * Makes text usable in URLs (removes special characters, replaces spaces with "-")
 */
export const slugify = (text: string): string => {
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

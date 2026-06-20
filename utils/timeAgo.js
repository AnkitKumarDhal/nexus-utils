/**
 * Converts an ISO date string to a human-readable "time ago" format
 * @param {string} iso - ISO date string to compare against current time
 * @returns {string} - Relative time string like "2 days ago" or "Just now"
 */
export const timeAgo = (iso) => {
  const curDate = new Date();
  const inpDate = new Date(iso);

  const diff = curDate - inpDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days >= 1) return `${days} days ago`;
  if (hours >= 1) return `${hours} hours ago`;
  if (minutes >= 5) return `${minutes} mins ago`;
  if (minutes < 5) return `Just now`;
};

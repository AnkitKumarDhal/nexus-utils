/**
 * Converts an ISO date string to a human-readable "time ago" format
 */
export const timeAgo = (iso: string | Date): string => {
  const curDate = new Date();
  const inpDate = new Date(iso);

  const diff = curDate.getTime() - inpDate.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days >= 1) return `${days} days ago`;
  if (hours >= 1) return `${hours} hours ago`;
  if (minutes >= 5) return `${minutes} mins ago`;
  return `Just now`;
};

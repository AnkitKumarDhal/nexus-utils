/**
 * Truncates the input text according to how many characters specified
 */
export function truncate(text: string, n: number): string {
  if (text.length > n) {
    return `${text.slice(0, n)}...`;
  } else {
    return `${text}`;
  }
}

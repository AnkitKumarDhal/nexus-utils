/**
 * Removes duplicate values from an array (primitives only)
 */
export const unique = <T>(array: T[]): T[] => {
  return [...new Set(array)];
};

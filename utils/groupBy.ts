/**
 * Groups array items by a key returned from keyFn
 */
export const groupBy = <T>(
  array: T[],
  keyFn: (item: T) => string,
): Record<string, T[]> => {
  const final = array.reduce<Record<string, T[]>>((grouped, item) => {
    let index = keyFn(item);
    (grouped[index] ??= []).push(item);
    return grouped;
  }, {});
  return final;
};

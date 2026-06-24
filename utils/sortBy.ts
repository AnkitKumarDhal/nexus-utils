/**
 * Returns a sorted copy of an array by a key function
 */
export const sortBy = <T>(
  array: T[],
  keyFn: (item: T) => string | number,
  direction: "asc" | "desc" = "asc",
): T[] => {
  let copy = [...array];
  copy.sort((a, b) => {
    const valA = keyFn(a);
    const valB = keyFn(b);
    if (direction === "desc") {
      if (typeof valA === "string" && typeof valB === "string") {
        return valB.localeCompare(valA);
      } else if (typeof valA === "number" && typeof valB === "number") {
        return valB - valA;
      }
      return 0;
    } else {
      if (typeof valA === "string" && typeof valB === "string") {
        return valA.localeCompare(valB);
      } else if (typeof valA === "number" && typeof valB === "number") {
        return valA - valB;
      }
      return 0;
    }
  });
  return copy;
};

/**
 * Creates a debounced function that delays calling fn until ms after the last call
 */
export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  ms: number,
) => {
  let timerID: ReturnType<typeof setTimeout> | undefined = undefined;

  return (...args: Parameters<T>) => {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      fn(...args);
    }, ms);
  };
};

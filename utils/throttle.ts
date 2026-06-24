/**
 * Creates a throttled function that calls fn at most once per ms
 */
export const throttle = <T extends (...args: any[]) => any>(
  fn: T,
  ms: number,
) => {
  let last = 0;

  return (...args: Parameters<T>) => {
    let curTime = Date.now();
    if (curTime - last > ms) {
      last = Date.now();
      fn(...args);
    }
  };
};

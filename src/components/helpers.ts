export const containsNumbers = (value: string): boolean => {
  return !/^\D*$/.test(value);
};
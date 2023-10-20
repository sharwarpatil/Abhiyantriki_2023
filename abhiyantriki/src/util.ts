export const getKeys = Object.keys as <T extends object>(
  o: T,
) => Array<keyof T>;

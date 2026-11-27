export const getFilter = (value: string, defaultValue: string) =>
  value === defaultValue ? undefined : value;

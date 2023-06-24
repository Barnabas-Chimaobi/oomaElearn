export const t = (key:string, values:string) => {
  if (values) return `t:${key}:${JSON.stringify(values)}`;
  return `t:${key}`;
};

export const setLocale = () => {};

export default {};

const stringRegexp = /^[A-Za-z\u00C0-\u017F\s]+$/;
const stringRegexpValidation = (value: string) =>
  stringRegexp.test(value.trim());

export default stringRegexpValidation;

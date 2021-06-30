const floatRegexp = /[-+]?[0-9]*\.?[0-9]+/;
const float = (value: string) => floatRegexp.test(value);

export default float;

const minlength = (minValue: number) => (value: string): boolean =>
  value.length >= minValue;

export default minlength;

const maxLength = (maxValue: number) => (value: string): boolean =>
  value.length <= maxValue;

export default maxLength;

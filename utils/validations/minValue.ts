const minValueFn = (minValue: number) => (value: string): boolean => {
  const numberValue = parseFloat(value);
  if (isNaN(numberValue)) return false;
  return numberValue >= minValue;
};

export default minValueFn;

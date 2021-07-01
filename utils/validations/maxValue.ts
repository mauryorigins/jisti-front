const maxValue = (maxValue: number) => (value: string): boolean => {
  const numberValue = parseFloat(value);
  if (isNaN(numberValue)) return false;
  return numberValue <= maxValue;
};

export default maxValue;

const requiredSelected = (value: any): boolean =>
  value.some((v: any) => v.selected);

export default requiredSelected;

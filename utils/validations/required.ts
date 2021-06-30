const required = (value: string): boolean =>
  value !== '' && value.trim().length > 0;

export default required;

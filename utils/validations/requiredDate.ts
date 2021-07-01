const requiredDate = (date: Date): boolean => !isNaN(date.getTime());

export default requiredDate;

const validRFCRegExp = /^([A-Z,a-z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z, a-z|\d]{3})$/;

const validRFC = (rfc: string): boolean => validRFCRegExp.test(rfc);

export default validRFC;

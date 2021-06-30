const validPasswordRegExp = /^(?=.*[A-Za-z])[A-Za-z\d$@$!%*#?&]{8,}$/;
const validPassword = (password: string): boolean =>
  validPasswordRegExp.test(password);

export default validPassword;

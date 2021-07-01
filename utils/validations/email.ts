/* eslint-disable no-useless-escape */
class Email {
  public static regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public static test(value: string): boolean {
    return this.regexp.test(value.toLowerCase());
  }
}
const email = (value: string): boolean => Email.test(value);

export default email;

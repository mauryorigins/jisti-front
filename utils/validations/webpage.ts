const validWebpageRegExp = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$/;

const validWebpage = (webpage: string): boolean =>
  validWebpageRegExp.test(webpage);

export default validWebpage;

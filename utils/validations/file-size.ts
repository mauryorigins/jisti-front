const fileSize = (fileSize = 0) => (maxFileSize = 0): boolean => {
  if (maxFileSize) {
    return fileSize > Number(`${maxFileSize}e6`) ? false : true;
  }
  return true;
};

export default fileSize;

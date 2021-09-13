const concat = (string, maxCount) => {
  let newString = string.substring(0, maxCount) + "...";
  return newString;
};

export default concat;

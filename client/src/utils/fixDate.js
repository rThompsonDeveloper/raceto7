const fixDate = (date, forForm) => {
  let newDate = date.substring(0, 10);
  let day = newDate.substring(8, 10);
  let month = newDate.substring(5, 7);
  let year = newDate.substring(0, 4);
  forForm
    ? (newDate = year + "-" + month + "-" + day)
    : (newDate = month + "/" + day + "/" + year);
  return newDate;
};

export default fixDate;

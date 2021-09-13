const fixTime = (time) => {
  let hour = time.substring(0, 2);
  const minute = time.substring(3, 5);
  let am = false;
  if (hour > 12) {
    hour = hour - 12;
  } else {
    am = true;
  }

  if (hour < 1) {
    hour = 12;
  }

  am ? (am = "AM") : (am = "PM");
  const newTime = hour + ":" + minute + " " + am;
  return newTime;
};

export default fixTime;

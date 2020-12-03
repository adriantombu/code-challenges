function timeConversion(s) {
  if (s.slice(-2) == "AM") {
    if (s.startsWith("12")) {
      return `00${s.slice(2, -2)}`;
    }

    return s.slice(0, -2);
  }

  let start = parseInt(s.slice(0, 2), 10);
  if (start != 12) {
    start += 12;
  }

  return `${start}${s.slice(2, -2)}`;
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("01:05:45AM"));
console.log(timeConversion("12:45:54PM"));

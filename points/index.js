function convertStringToArrayOfStringsWithPoints(
  string,
  newString = "",
  step = 0,
  arrOfStrings = []
) {
  if (string.length - step === 1) {
    const res = newString + string[step];

    arrOfStrings.push(res);
  } else {
    const symbol = string[step];
    const next = newString + symbol;

    convertStringToArrayOfStringsWithPoints(
      string,
      next,
      step + 1,
      arrOfStrings
    );
    convertStringToArrayOfStringsWithPoints(
      string,
      next + ".",
      step + 1,
      arrOfStrings
    );
  }
  return arrOfStrings;
}

console.log(convertStringToArrayOfStringsWithPoints("abcd"));

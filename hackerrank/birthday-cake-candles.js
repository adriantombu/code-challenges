function birthdayCakeCandles(candles) {
  let res = 0;
  const s = candles.sort((a, b) => b - a);

  for (let i = 0; i < s.length; i++) {
    if (s[i] < s[0]) {
      break;
    }

    res++;
  }

  return res;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));

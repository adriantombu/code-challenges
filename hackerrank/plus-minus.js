function plusMinus(arr) {
  const length = arr.length;
  const res = { positive: 0.0, negative: 0.0, nil: 0.0 };

  for (const nb of arr) {
    if (nb > 0) {
      res.positive++;
    } else if (nb < 0) {
      res.negative++;
    } else {
      res.nil++;
    }
  }

  console.log(res.positive / length);
  console.log(res.negative / length);
  console.log(res.nil / length);
}

plusMinus([-4, 3, -9, 0, 4, 1]);

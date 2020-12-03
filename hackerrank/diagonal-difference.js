function diagonalDifference(arr) {
  const length = arr.length;
  let left = 0;
  let right = 0;

  for (let i = 0; i < length; i++) {
    left += arr[i][i];
    right += arr[i][length - i - 1];
  }

  return Math.abs(left - right);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);

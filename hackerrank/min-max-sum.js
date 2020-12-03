function miniMaxSum(arr) {
  const max = arr
    .sort((a, b) => b - a)
    .slice(0, 4)
    .reduce((acc, val) => acc + val, 0);

  const min = arr
    .sort((a, b) => a - b)
    .slice(0, 4)
    .reduce((acc, val) => acc + val, 0);

  console.log(`${min} ${max}`);
}

miniMaxSum([1, 2, 3, 4, 5]); // 10 14

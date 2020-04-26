/*
  Sock Merchant
  https://www.hackerrank.com/challenges/sock-merchant/problem
*/
function sockMerchant(n, ar) {
  const res = {};
  return ar
    .map((s) => (!!res[s] ? (res[s] = res[s] + 1) : (res[s] = 1)))
    .filter((s) => s % 2 === 0).length;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])); // 2
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3

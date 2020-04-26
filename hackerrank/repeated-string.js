/*
  Repeated String
  https://www.hackerrank.com/challenges/repeated-string/problem
*/

function repeatedString(s, n) {
  if (s.length === 1 && s === "a") {
    return n;
  }
  if (!s.includes("a")) {
    return 0;
  }

  const multiplicator = parseInt(n / s.length, 10);
  const mod = n % s.length;
  const matches = s.match(/a/gi).length;
  return matches * multiplicator + (s.substr(0, mod).match(/a/gi) || []).length;
}

console.log(repeatedString("abcac", 10)); // 4
console.log(repeatedString("aba", 10)); // 7
console.log(repeatedString("a", 1000000000000)); // 1000000000000
console.log(repeatedString("d", 590826798023)); // 0
console.log(repeatedString("ceebbcb", 817723)); // 0
console.log(repeatedString("gfcaaaecbg", 547602)); // 164280
console.log(
  repeatedString(
    "bcbccacaacbbacabcabccacbccbababbbbabcccbbcbcaccababccbcbcaabbbaabbcaabbbbbbabcbcbbcaccbccaabacbbacbc",
    649606239668
  )
); // 162401559918
console.log(
  repeatedString(
    "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm",
    736778906400
  )
); // 51574523448

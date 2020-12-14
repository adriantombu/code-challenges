function alternatingCharacters(s) {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (res[res.length - 1] === s[i]) {
      continue;
    }

    res = `${res}${s[i]}`;
  }

  return s.length - res.length;
}

console.log(alternatingCharacters("AAABBBAABB")); // 6
console.log(alternatingCharacters("AABBAABB")); // 4
console.log(alternatingCharacters("ABABABAA")); // 1
console.log(alternatingCharacters("AAAA")); // 3
console.log(alternatingCharacters("BBBBB")); // 4
console.log(alternatingCharacters("ABABABAB")); // 0
console.log(alternatingCharacters("BABABA")); // 0
console.log(alternatingCharacters("AAABBB")); // 4

/*
  Counting Valleys
  https://www.hackerrank.com/challenges/counting-valleys/problem
*/

function countingValleys(n, s) {
  let altitude = 0;
  let valleys = 0;

  for (let i = 0; i < n; i++) {
    altitude = s[i] === "U" ? ++altitude : --altitude;

    if (altitude === 0 && s[i] === "U") {
      valleys++;
    }
  }

  return valleys;
}

console.log(countingValleys(8, "DDUUUUDD")); // 1
console.log(countingValleys(8, "DDUUUUDD")); // 1
console.log(countingValleys(8, "UDDDUDUU")); // 1
console.log(countingValleys(12, "DDUUDDUDUUUD")); // 2
console.log(countingValleys(10, "UDUUUDUDDD")); // 0

/*
  Jumping on the Clouds
  https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
*/

function jumpingOnClouds(c) {
  let jumps = 0;

  for (let i = 0; i < c.length; i++) {
    if (c[i] === 0 && (c[i + 1] === 0 || c[i + 2] === 0)) {
      jumps++;

      if (c[i + 1] === 0 && c[i + 2] === 0) {
        i++;
      }
    }
  }

  return jumps;
}

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])); // 3
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); // 4
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0])); // 3
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); // 4
console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0])); // 3

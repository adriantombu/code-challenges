// NOT WORKING

function solution(N) {
  const max = Number.MAX_SAFE_INTEGER;
  const min = Number.MIN_SAFE_INTEGER;

  if (N > max || N < min) {
    return '';
  }

  let L = 0;
  let R = 1;

  if (N === L || N === R) {
    return '';
  }

  let result = '';
  // No idea how to find this
  let next = N < L ? 'L' : 'R';

  while (L !== N || R !== N) {
    result += next;

    if (next === 'L') {
      L = (2 * L) - R;
    } else {
      R = (2 * R) - L;
    }

    // No idea how to find this
    next = N < L ? 'L' : 'R';

    if (L < min || L > max || R < min || R > max) {
      return 'impossible';
    }
  }

  return result;
}

console.log(solution(-11)) // LLRL
// console.log(solution(21)) // LLRLR

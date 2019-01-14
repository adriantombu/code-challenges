function solution(S) {
  let length = S.length;

  for (let i=0; i < length; i++) {
    const current = S[i];
    const next = S[i+1];

    if (current === next) {
      const start = S.slice(0, i);
      const end = S.slice(i + 2);

      S = start + end;

      length = S.length;
      i = 0;
    }
  }

  if (S.length === 2 && S[0] === S[1]) {
    return '';
  }

  return S;
}

console.log(solution('ACCAABBC')) // "AC"
console.log(solution('ABCBBCBA')) // ""
console.log(solution('BABABA')) // ""

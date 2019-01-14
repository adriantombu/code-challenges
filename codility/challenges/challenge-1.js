
function solution(T, R) {
  if (T.length !== R.length) {
    return;
  }

  const nbResults = T.length;

  if (nbResults < 1 || nbResults > 300) {
    return;
  }

  const res = {};

  for (let i=0; i < nbResults; i++) {
    let test = T[i];
    const result = R[i];
    const isSubTest = isNaN(test[test.length - 1]);
    const isSuccess = result === 'OK';

    if (isSubTest) {
      test = T[i].slice(0, -1);
    }

    if (res[test] === false) {
      continue;
    }

    res[test] = isSuccess;
  }

  const results = Object.keys(res);
  let nbSuccess = 0;

  for (const success of results) {
    if (res[success]) {
      nbSuccess++;
    }
  }

  return Math.floor(100 / results.length * nbSuccess);
}

console.log(solution(
  [ 'test1a', 'test2', 'test1b', 'test1c', 'test3' ],
  [ 'Wrong answer', 'OK', 'Runtime error', 'OK', 'Time limit exceeded' ]
)) // 33

console.log('---');

console.log(solution(
  [ 'codility1', 'codility3', 'codility2', 'codility4b', 'codility4a' ],
  [ 'Wrong answer', 'OK', 'OK', 'Runtime error', 'OK' ]
)) // 50

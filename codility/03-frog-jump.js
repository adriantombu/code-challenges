/*
  FrogJmp
  Count minimal number of jumps from position X to Y
  https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
*/

const solution = (start, end, dist) => {
  return Math.ceil((end - start) / dist)
}

solution(10, 85, 30) // 3
solution(85, 85, 30) // 0
solution(1, 1e9, 28) // 35714286

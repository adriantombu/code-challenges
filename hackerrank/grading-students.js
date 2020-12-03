function gradingStudents(grades) {
  let res = [];

  for (const grade of grades) {
    const next = grade + 5 - (grade % 5);

    if (grade < 38) {
      res.push(grade);
    } else if (next - grade < 3) {
      res.push(next);
    } else {
      res.push(grade);
    }
  }

  return res;
}

console.log(gradingStudents([73, 67, 38, 33]));

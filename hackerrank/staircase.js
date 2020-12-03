function staircase(n) {
  const hash = "#".repeat(n);

  for (let i = 0; i < n; i++) {
    console.log(hash.substr(0, i + 1).padStart(n, " "));
  }
}

staircase(6);

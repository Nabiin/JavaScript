let c = 0;
for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    if (i % j == 0) {
      c++;
    }
  }
  if (c == 2) {
    console.log(i);
  }
  c = 0;
}


function fibs(end) {
  let a = 0;
  let b = 1;
  let c = a + b;

  let arr = [a, b, c];

  if (end <= 0) return [];
  else if (end == 1) return [a];
  else if (end == 2) return [a, b];

  for (let i = 2; i < end; i++) {
    a = b;
    b = c;
    c = a + b;
    arr.push(c);
  }

  return arr;
}

function fibsRec(num) {
  if (num <= 1) return num;

  return fibsRec(num - 1) + fibsRec(num - 2);
}

console.log(fibs(13));
console.log(fibsRec(12));

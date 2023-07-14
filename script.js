let a = [0, 1, 2, 3, 4, 5, 6];
let b = [];
let c = 3;
for (let i = 0; i < a.length; i++) {
  if (a[i] !== c) {
    for (let y = 0; y <= b.length; y++) {
      b[y] = a[i];
    }
  }
}
console.log(b);

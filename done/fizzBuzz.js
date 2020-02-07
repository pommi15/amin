/* Done */
const str = ["A", "r", "m", "k", "p", "f", "i", "l", "n"];

const num = [2, 3, 5, 6, 7, 9, 10, 15, 20];
const x = 100;
let i;
let j;

for (i = 1; i <= x; i++) {
  var m = "";
  for (j = 0; j <= num.length; j++) {
    if (i % num[j] == 0) {
      m += str[j];
    }
  }
  console.log(m.length ? m : i);
}

const names = ["A", "r", "m", "k", "p", "f", "i", "l", "n"];
const nums = [2, 3, 5, 6, 7, 9, 10, 15, 20];
const max = 100;
for (let i = 0; i <= max; i++) {
  let str = "";
  for (let j = 0; j < names.length; j++) {
    if (i % nums[j] == 0) {
      str += names[j];
    }
  }
  console.log(str === "" ? i : str);
}

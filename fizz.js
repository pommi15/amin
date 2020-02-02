const names = ["Fizz", "Buzz", "Bumm", "Damn"]
const nums = [2, 3, 4, 5]
const max = 100
for (let i = 0; i < max; i++) {
    let str = ""
    for (let j = 0; j < names.length; j++) {
        if (i % nums[j] == 0) {
            str += names[j] + " "
        }
    }
    console.log(str === "" ? i : str);
}
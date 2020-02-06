/* TODO
1) const o. var
2) variablen namen bissl übverdenken
3) string füllen mit ifs



4) vars in arrays
*/

// 3 Fizz
// 4 Bumm
// 5 Buzz
// 6 Hamm

const str = ["Fizz", "Bumm", "Buzz", "Hamm"];
const num = [3, 4, 5, 6,];
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
    console.log(m.length ? m : i)
}










// const x = 100;
// const fizz = 3; //Fizz
// const buzz = 5; //Buzz
// const hamm = 6; //Hamm
// const bumm = 4; //Bumm

// for (var i = 1; i <= x; i++) {
//     var m = "";
//     if (i % fizz == 0) {
//         m += "Fizz";

//     } if (i % buzz == 0) {
//         m += "Buzz";

//     }
//     if (i % bumm == 0) {
//         m += "Bumm";

//     }
//     if (i % hamm == 0) {
//         m += "Hamm";


//     }
//     if (m.length) {
//         console.log(m.length ? m : i);

//     } else {
//         console.log(i);

//     }

// }





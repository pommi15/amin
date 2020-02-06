/* TODO
1) const o. var
2) variablen namen bissl übverdenken
3) string füllen mit ifs



4) vars in arrays
*/





const x = 100;
const fizz = 3; //Fizz
const buzz = 5; //Buzz
const hamm = 6; //Hamm
const bumm = 4; //Bumm

for (var i = 1; i <= x; i++) {
    var m = "";
    if (i % fizz == 0) {
        m += "Fizz" + "";

    } if (i % buzz == 0) {
        m += "Buzz";

    }
    if (i % bumm == 0) {
        m += "Bumm";

    }
    if (i % hamm == 0) {
        m += "Hamm";


    }
    if (m.length) {
        console.log(m.length ? m : i);

    } else {
        console.log(i);

    }

}





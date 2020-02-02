/* TODO
1) const o. var
2) variablen namen bissl übverdenken
3) string füllen mit ifs



4) vars in arrays
*/

var u = 4; //Bumm
var v = 6; //Hamm
var x = 100;
var y = 3; //Fizz
var z = 5; //Buzz
for (var i = 1; i <= x; i++) {
    switch (true) {
        case i % u == 0 && i % v == 0 && i % y == 0 && i % z == 0:
            console.log("FizzBuzzBummHamm");
            break;
        case i % u == 0 && i % v == 0 && i % y == 0:
            console.log("FizzBummHamm");
            break;
        case i % v == 0 && i % y == 0 && i % z == 0:
            console.log("FizzBuzzHamm");
            break;
        case i % y == 0 && i % z == 0 && i % u == 0:
            console.log("FizzBuzzBumm");
            break;
        case i % y == 0 && i % z == 0:
            console.log("FizzBuzz");
            break;
        case i % v == 0 && i % y == 0:
            console.log("FizzHamm");
            break;
        case i % y == 0:
            console.log("Fizz");
            break;
        case i % z == 0:
            console.log("Buzz");
            break;
        case i % u == 0:
            console.log("Bumm");
            break;
        case i % v == 0:
            console.log("Hamm");
            break;
        default:
            console.log(i);
            break;
    }
}
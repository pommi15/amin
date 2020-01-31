// Das ist eine gute rohe version (das %15 hat mich überrascht, da wär ich gar nciht draufgekommen....). Auf der werden wir aufbauen.
// als erstes ziehen wir mal die Variablen hinaus. ich will das alle werte (100, 3 und 5) außerhalb des loops als variablen stehen sodass man alles leicht auf einmal ändern kann
// außerdem will ich dass du die {} klammern verwendest, das is kein muss aber ich finde es sauberer bei größeren konstrukten.
/*
  nicht if()
            log
  sondern
        if(){
            log
        }
 */
// dann möchte ich dass du drüber nachdenkst wie man das schöner machen kann. für jede möglichkeit ein if statement welches dann logt is ja gut aber es geht noch besser.
// ich will dann auch noch zahlen hinzufügen nämlich vielfache von 4 geben Bumm aus und vielfache von 6 geben Hamm aus. und wieder wenn mehrere teiler treffen dann gibst mehrere worte aus

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

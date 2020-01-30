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

for (var i = 1; i <= 100; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

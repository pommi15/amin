/* Done
1) mach einen loop der alle zahlen von eins bis 10 ausgibt, untereinander:
1
2
3
4
5
6
7
8
9
10*/

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

/*
2) Done
mach einen loop der alle zahlen von 1 bis 10 ausgibt, in einer Ziele:
12345678910

*/
// var vals = [];
// for (let i = 1; i <= 10; i++) {
//   vals.push(i);
// }
// console.log(vals.join(""));

/*
3) Done
mach einen loop der alle zahlen von 10 bis -10 ausgibt in einer Zeile
109876543210-1-2-3-4-5-6-7-8-9-10
*/

// var vals = [];
// for (let i = 10; i >= -10; i--) {
//   vals.push(i);
// }
// console.log(vals.join(""));

/*
4) mach einen loop der die fibonaccisequenz bis 100 ausgibt, untereinnander:
0
1
1
2
3
5
usw.*/

var ergebnis = [0, 1];
var farr = [];
farr[0] = 0;
farr[1] = 1;
for (i = 2; i <= 100; i++) {
    farr[i] = farr[i - 2] + farr[i - 1];
    ergebnis.push(farr[i])
    // console.log(farr[i])                 //0 1 1 fehlt deshalb das ergebnis array
}
for (j = 0; j <= ergebnis.length; j++) {  //Damit es untereinander ausgegeben wird
    console.log(ergebnis[j])
}





/*
5)
 mach eine function der du einen string übergeben kannst die diesen string verkehrt ausgibt
reverser("Hallo!") // gibt "!ollaH" aus
*/
// ja fast, aber warum hast du draußen eine variable die du dann in der function bearbeitest? das macht wenig sinn.
// wenn dann sollte die function was returnen was du dann loggst oder die function loggt selber was also:
/* entweder:
function reverser(str) {
  let backWards = ""
  for (var i = str.length - 1; i >= 0; i--) {
    backWards += str[i];
  }
  return backWards;
}
oder:
function reverser(str) {
  let backWards = ""
  for (var i = str.length - 1; i >= 0; i--) {
    backWards += str[i];
  }
  console.log(backWards);
}

*/

// var backWards = "";
// function reverser(str) {
//   for (var i = str.length - 1; i >= 0; i--) {
//     backWards += str[i];
//   }
// }
// reverser("Hallo!");
// console.log(backWards);

/* Done
6) mach einen loop der nur gerade zahlen bis 10 augibt

*/
// num = 10;
// for (i = 2; i <= num; i += 2) {
//   console.log(i);
// }

/*



7) mach eine function die eine zahl n und eine zahl k nimmt.
n ist die zahl bis zu der der loop zählt und k ist die zahl durch die die geloggten zahlen teilbahr sein sollen
teilbahr(30,3); gibt folgendes aus:
3
6
9
12
15
18
21
24
27
30
8)
*/

// teiler(5, 100);

// function teiler(k, n) {
//     var counter = [];
//     for (i = 0; i <= n; i++) {
//         counter.push(i)
//         if (i % k === 0) {
//             console.log(counter[i])
//         }
//     }
// }

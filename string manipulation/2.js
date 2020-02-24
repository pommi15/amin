/*2)
    mach eine function die zwei strings zusammenf端hrt als w端rde man katern mischen. also immer ein zichen vom einen dann ein zeichen vom anderen.
    das ergebnis soll retunred werden
    compiner("test","aaaa");  w端rde "taeasata" zur端ckgeben

    */
// meine überlegung war die strings zusammenzufassen und über die gesamtlänge zu iterrieren
//dadurch dass aaaa nur 4x vorkommt erscheint undefined
function combiner(a, b) {
    let str = "";
    let c = a + b;
    for (i = 0; i < c.length; i++) {

        str += a[i]
        str += b[i]
    }

    return str;
}
result = combiner("testiiis", "aaaa");
console.log(result)

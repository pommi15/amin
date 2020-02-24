/*2)
    mach eine function die zwei strings zusammenführt als würde man katern mischen. also immer ein zichen vom einen dann ein zeichen vom anderen.
    das ergebnis soll retunred werden
    compiner("test","aaaa");  würde "taeasata" zurückgeben

    */

function combiner(a, b) {
    let str = "";
    let c = a + b;
    for (i = 0; i < c.length; i++) {
        if (a[i]) {
            str += a[i]
        }
        if (b[i]) {
            str += b[i]
        }
    }

    return str;
}
result = combiner("testiiis", "aaaa");
console.log(result)

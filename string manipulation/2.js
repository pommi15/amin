/*2)
    mach eine function die zwei strings zusammenführt als würde man katern mischen. also immer ein zichen vom einen dann ein zeichen vom anderen.
    das ergebnis soll retunred werden
    compiner("test","aaaa");  würde "taeasata" zurückgeben

    */

function combiner(a, b) {
    let str = "";
    for (i = 0; i < a.length; i++) { }
    for (i = 0; i < b.length; i++) {
        str += a[i] + b[i];
    }
    return str;
}
result = combiner("testiiis", "aaaa");
console.log(result)

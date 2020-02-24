/* 3)
mach eine function die von einem string das quadrat loggt
das soll so aussehen:

squarer("test") gibt folgendes aus:

test
test
test
test

oder

sqarer("ich") gibt folgendes aus:

ich
ich
ich

*/
function squarer(str) {
    var x = str.length;
    for (i = 1; i <= x; i++) {
        console.log(str)
    }
}
squarer("test");




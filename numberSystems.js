/*
bau eine function die eine zahl in dezimal übernimmt und dann als binär ausgibt
also bei 10:
1010
*/
function decimalToBinary(decimal: number): string {
  return decimal.toString(2);
}

console.log(decimalToBinary(10));

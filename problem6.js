var sumOfSquares = 0,
    squareOfSums = 0,
    t1 = process.hrtime()[1];

for (var i = 1; i <= 100; i++) {
    sumOfSquares += i*i;
    squareOfSums += i;
}

var answer = squareOfSums * squareOfSums - sumOfSquares;

var t2 = process.hrtime()[1];
console.log('result: ' + answer);
console.log('time: ' + (t2 - t1) + 'ns');
var a, b, c,
    answer = 0,
    t1 = process.hrtime()[1];

for (a = 100; a <= 1000; a++) {

    for (b = 100; b <= 1000; b++) {

        c = Math.sqrt((a*a) + (b*b));
        if (a + b + c === 1000) {
            answer = a * b * c;
            a = b = 9999;
        }

    }

}

var t2 = process.hrtime()[1];
console.log('result: ' + answer);
console.log('time: ' + (t2 - t1) + 'ns');
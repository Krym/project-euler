var answer = {
        steps: 0,
        number: 0    
    },
    i, j,
    steps = 0,
    start = process.hrtime();

for (j = 999999; j > 0 ; j--) {
    i = j;
    steps = 0;

    while(i !== 1) {
        steps++;
        if (i % 2 === 0) {
            i = i / 2;
        } else {
            i = i * 3 + 1;
        }
    }

    if (answer.steps < steps) {
        console.log(j, steps);
        answer.steps = steps;
        answer.number = j;
    }

}

console.log('result: ' + answer.number);
console.log('time: ' + process.hrtime(start)[0] + 's ' + process.hrtime(start)[1] + 'ns');
var utils = require('./utils/utils');

var count = 0,
    i = 1,
    triangle = 0;
    start = process.hrtime();

while (count < 500) {
    count = 0;
    triangle += i++;
    var sqt = Math.sqrt(triangle);

    for (var j = 1; j < sqt; j++) {
        if (triangle % j === 0) {
            count += 2;
        }
    }

    if (sqt === triangle * triangle) {
        count--;
    }

}

console.log('result: ' + triangle);
console.log('time: ' + (process.hrtime(start)[0]) + ',' + process.hrtime(start)[1]);
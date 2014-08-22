var utils = require('./utils/utils');


var answer = 2,
    i = 1,
    t1 = process.hrtime()[1];

while (i < 10001) {
    answer++;
    if (utils.isPrime(answer)) {
        i++;
    }
    
}

var t2 = process.hrtime()[1];
console.log('result: ' + answer);
console.log('time: ' + (t2 - t1) + 'ns');

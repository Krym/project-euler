var utils = require('./utils/utils');

var number = 600851475143,
divider = 2,
t1 = process.hrtime()[1];

while (!utils.isPrime(number)) {

    if ((number % divider === 0)) {
        number = number / divider;
    } else {
        divider = utils.nextPrime(divider);
    }

}

var t2 = process.hrtime()[1];
console.log('result: ' + number);
console.log('time: ' + (t2 - t1) + 'ns');

var utils = require('./utils/utils');

var limit = 2000000,
    i, answer = 0,
    t1 = process.hrtime()[1];

var primes = utils.getPrimes(limit);

for (i = 0; i < primes.length; i++) {
    answer += primes[i];
}

var t2 = process.hrtime()[1];
console.log('result: ' + answer);
console.log('time: ' + (t2 - t1) + 'ns');
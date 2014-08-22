var utils = require('./utils/utils');

var i = j = 999,
    answer = 0
    t1 = process.hrtime()[1];;

for (i; i > 900; i--) {
    for (j; j > 900; j--) {
        answer = i*j;
        if (utils.isPalindrome(answer)) {
            i = j = 0;
        }
    }
    j = 999;
}

var t2 = process.hrtime()[1];
console.log('result: ' + answer);
console.log('time: ' + (t2 - t1) + 'ns');
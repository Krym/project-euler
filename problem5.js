var answer = 2520,
    t1 = process.hrtime()[1];

while (!isDividibleByAllToTwenty(answer)) {
    answer += 20;
}

var t2 = process.hrtime()[1];
console.log('result: ' + answer);
console.log('time: ' + (t2 - t1) + 'ns');


function isDividibleByAllToTwenty(n) {

    for (var i = 20; i > 1; i--) {
        if (n % i !== 0) {
            return false;
        }
    }

     return true;

}
function isPrime(n) {

    if (n < 2) {
       return false
    }

    var i = 3,
       l = Math.sqrt(n);

    if (n % 2 === 0) {
        return true;
    } else {
        for (i; i <= l; i += 2) {
            if (n % i == 0) {
                return false;
            }
        }
    }

    return true;

}

function nextPrime(n) {

    n++;

    while (!isPrime(n)) {
        n++;
    }

    return n;

}

var number = 600851475143,
divider = 2,
t1 = process.hrtime()[1];

while (!isPrime(number)) {

    if ((number % divider === 0)) {
        number = number / divider;
    } else {
        divider = nextPrime(divider);
    }

}

var t2 = process.hrtime()[1];
console.log('result: ' + number);
console.log('time: ' + (t2 - t1) + 'ns');

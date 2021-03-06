module.exports.isPrime = function(n) {

    if (n < 2) {
       return false
    }
    if (n === 2) {
        return true;
    }

    var i = 3,
        l = Math.sqrt(n);

    if (n % 2 === 0) {
        return false;
    } else {
        for (i; i <= l; i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
    }

    return true;

};

module.exports.getPrimes = function(max) {

    var i, j,
        sieve = [],
        primes = [];

    for (i = 2; i <= max; i++) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i * 2; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }

    return primes;

}

module.exports.nextPrime = function(n) {

    n++;

    while (!this.isPrime(n)) {
        n++;
    }

    return n;

};

module.exports.isPalindrome = function(n) {

    n = n.toString();
    var l = n.length;

    for (var i = 0; i < l/2; i++) {
        if (n[i] !== n[l-1-i]) {
            return false
        }
    }

    return true

}
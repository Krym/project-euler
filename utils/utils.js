module.exports.isPrime = function(n) {

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

module.exports.nextPrime = function(n) {

    n++;
    
    while (!this.isPrime(n)) {
        n++;
    }

    return n;

}
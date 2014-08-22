function isPrime(n) {

   if (n < 2) {
      return false
   }
   
   var isPrime = true,
      i = 2,
      l = Math.sqrt(n);

   for (i; i <= l; i++) {
      if (n % i == 0) {isPrime = false}
   }

   return isPrime;

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

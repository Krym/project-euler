project-euler
=============

![Project Euler flare](https://projecteuler.net/profile/Krym.png)

// for now only :)\n
var i = 3, a=0, t1 = Date.now();
for (i; i<1000000; i++) {
    if (i%3===0 || i%5===0)
        a += i;
}
var t2 = Date.now();
console.log(a, t2-t1);

//problem 2\n
var a=1, b=2, c=2, answer=0, t1 = Date.now();
for (a; a<4000000; a=b) {
    b = c;
    if (a%2===0) answer += a;
    c = a + b;
}
t2 = Date.now();
console.log(answer, t2-t1)

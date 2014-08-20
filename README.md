project-euler
=============

https://projecteuler.net/profile/Krym.png

// for now only :)
var i = 3, a=0, t1 = Date.now();
for (i; i<1000000; i++) {
    if (i%3===0 || i%5===0)
        a += i;
}
var t2 = Date.now();
console.log(a, t2-t1);

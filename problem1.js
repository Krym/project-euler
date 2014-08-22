var i = 3,
    a=0, 
    t1 = process.hrtime()[1];

for (i; i<1000; i++) {
    if (i%3===0 || i%5===0)
        a += i;
}

var t2 = process.hrtime()[1];

console.log('result: ' + a);
console.log('time: ' + (t2 - t1) + 'ns');

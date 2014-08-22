var a=1,
    b=2,
    c=2,
    answer=0,
    t1 = process.hrtime()[1];

for (a; a<4000000; a=b) {
    b = c;
    if (a%2===0) answer += a;
    c = a + b;
}
var t2 = process.hrtime()[1];

console.log('result: ' + answer);
console.log('time: ' + (t2 - t1) + 'ns');
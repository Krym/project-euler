var cache = new Object(),
    start = process.hrtime();

function countRoutes(a,b) {
    if (a === 0 || b === 0) {
        return 1
    } 

    if (cache['a'+a+'b'+b]) {
        return cache['a'+a+'b'+b];
    }

    cache['a'+a+'b'+b] = cache['b'+b+'a'+a] = countRoutes(a, b-1) + countRoutes(a-1, b);
    return cache['a'+a+'b'+b];
}

console.log('result: ' + countRoutes(20,20));
console.log('time: ' + (process.hrtime(start)[0]) + ',' + process.hrtime(start)[1]);
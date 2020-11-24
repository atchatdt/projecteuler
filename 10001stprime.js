console.time('t')
function testPrime(n) {
    if (n == 2 || n == 3) {
        return true
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}

let count = 1
let i = 2;
let result = 0;
while (count <= 10001) {
    if (testPrime(i)) {
        count += 1
        result = i
    }
    i++
}

console.log(result)

console.timeEnd('t')
console.time('t')
let obj = {}
function fibonacci(num) {
    if (obj[num]) return obj[num]
    if (num < 1) return 0
    if (num < 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

function evenFibSum(limit) {
    let sum = 0
    let i = 0;
    while (sum < limit) {
        let result = fibonacci(i)
        obj[i]=result
        if (result > limit) break
        if (result % 2 == 0) {
            sum += result
        }
        i++
    }
    return sum
}

console.log(evenFibSum(100_000_000))
console.timeEnd('t')
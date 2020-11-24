console.time('t')
function fibonacci(num, obj) {
    if (obj[num]) return obj[num]
    if (num < 1) return 0
    if (num < 2) return 1;
    let result = fibonacci(num - 1, obj) + fibonacci(num - 2, obj)
    obj[num] = result
    return result
}

let obj = {}
console.log(fibonacci(995,obj))
console.timeEnd('t')
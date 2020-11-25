console.time('t')
function isPrime(n) {
    if (n == 1 || n < 1) return false //không phải số nguyên tố
    if (n < 4) return true // 2, 3
    if (n % 2 == 0) return false // số chẵn chỉ có 2 là số nguyên tố
    if (n < 9) return true // các trường hợp còn lại khi bé hơn 9
    if (n % 3 == 0) return false // chi hết => có hơn 2 ước so

    let sqrtN = Math.sqrt(n)
    let count = 5 // nhằm chỉ xét số lẻ
    while (count <= sqrtN) {
        if (n % count == 0) return false

        // nhằm chỉ xét số lẻ count +=2(bắt đầu từ 5)
        if (n % (count + 2) == 0) return false

        count += 6
    }
    return true
}

function summationOfPrimes(limit) {
    let i = 5;
    let sum = 5;
    while (i < limit) {
        if (isPrime(i)) {
            sum += i
        }
        i+=2
    }
    return sum
}

console.log(summationOfPrimes(20000000))
console.timeEnd('t')
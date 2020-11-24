// https://projecteuler.net/problem=3

// Xem lại kiến thức thừa số nguyên tố
function largestPrimeFactor(num) {

    let maxPrime = -1
    // số chia hết cho 2 => số chẵn
    while (num % 2 == 0) {
        maxPrime = 2 
        n /= 2
    }

    for (let i = 3; i < parseInt(Math.sqrt(num)) + 1; i += 2) {
        while (num % i == 0) {
            maxPrime = i
            num = num / i
        }
    }
    if (num > 2) {
        maxPrime = num
    }
    return parseInt(maxPrime)
}

console.log(largestPrimeFactor(13195))
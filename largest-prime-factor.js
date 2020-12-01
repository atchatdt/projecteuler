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

// console.log(largestPrimeFactor(13195))

function solution(n) {

    // tính, so sánh i với căn bậc 2 của n
    for (let i = 2; i < Math.sqrt(n) /*i * i <= n*/; i++) {

        // làm nhỏ n lại
        // => tìm số chia hết cho i, và gán n lại cho kết quả: n = n / i
        
        while (n % i === 0 /* && i * i <= n */) {
            console.log({ n, i })
            n /= i;
        }
    }
    return n;
}
console.log(solution(600851475143))
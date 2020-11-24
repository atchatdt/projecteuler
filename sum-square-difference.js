let sum1 = 0;
let sum2 = 0;
for (let i = 1; i <= 100; i++) {
    sum1 += i ** 2
    sum2 += i
}

console.log(sum2 ** 2 - sum1)
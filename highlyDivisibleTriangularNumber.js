function tau(num) {

    let n = num;
    let i = 2;
    let p = 1;

    if (num === 1) return 1;

    while (i * i <= n) {
        let c = 1;
        while (n % i === 0) {
            n /= i;
            c++;
        }
        i++;
        p *= c;
    }

    if (n === num || n > 1)
        p *= 1 + 1;

    return p;
}
function solution(x) {

    let n = 1;
    let d = 1;

    while (tau(d) <= x) {
        n++;
        d += n;
    }
    return d;
}
console.log(solution(500));
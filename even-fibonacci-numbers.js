// https://projecteuler.net/problem=2
console.time('t')
function evenFibSum(limit) {
    if (limit < 2) {
        return 0
    }

    let evenF1 = 0;
    let evenF2 = 2;
    let sumEvenF = evenF1 + evenF2

    while (evenF2 < limit) {

        let evenF3 = 4 * evenF2 + evenF1
        if (evenF3 > limit) break

        evenF1 = evenF2
        evenF2 = evenF3
        sumEvenF += evenF2
    }
    return sumEvenF
}
console.log(evenFibSum(100_000_000))
console.timeEnd('t')
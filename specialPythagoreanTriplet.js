function specialPythagoreanTriplet(limit) {
    let answer = 0
    for (let a = 3; a < limit; a++) {
        for (let b = a + 1; b < limit; b++) {
            let c = Math.pow(a, 2) + Math.pow(b, 2)
            c = Math.sqrt(c)
            if ((a + b + c) == 1000) {
                answer = a * b * c
            }
        }
    }
    return answer
}

console.log(specialPythagoreanTriplet(1_000_000))
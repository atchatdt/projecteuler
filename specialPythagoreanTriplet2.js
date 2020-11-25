function specialPythagoreanTriplet(limit) {
    for (let a = 3; a < parseInt((limit - 3) / 3); a++) {
        for (let b = a + 1; b < parseInt((limit - 1 - a) / 2); b++) {
            let c = limit - a - b
            if ((c ** 2) == (a ** 2 + b ** 2)) {
                return (c * a * b)
            }
        }
    }
}

console.log(specialPythagoreanTriplet(1_000_000))
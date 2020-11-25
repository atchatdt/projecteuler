function specialPythagoreanTriplet(s) {
    let s2 = parseInt(s / 2)
    let mlimit = parseInt(Math.sqrt(2)) - 1
    let k;

    for (let m = 2; m < mlimit; m++) {
        if (s2 % m == 0) {
            let sm = parseInt(s2 / m)
            while (sm % 2 == 0) {
                sm = parseInt(sm / 2)
            }
            k = (m % 2 == 1) ? (m + 2) : (m + 1)

            while (k < 2 * m && k <= sm) {
                if (sm % k == 0)
            }
        }
    }
}
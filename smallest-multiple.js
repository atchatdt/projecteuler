// https://projecteuler.net/problem=5

let mul = 1
let i = 20

// 18 => 3,6,9,2
// 15 => 3,5
// 16=> 2,8,4
// 12 => 6,4,3,2
// 14 => 2,7
// 10: 2,5
// 11, 13, 17, 19
while (true) {
    // let dk1 = i % 9 == 0 && i % 6 == 0
    // let dk2 = i % 8 == 0 && i % 5 == 0
    // let dk3 = i % 7 == 0

    let dk1 = i % 18 == 0 && i % 15 == 0
    let dk2 = i % 16 == 0 && i % 12 == 0
    let dk3 = i % 14 == 0 && i % 10 == 0
    let dk4 = i % 11 == 0 && i % 13 == 0 && i % 17 == 0 && i % 19 == 0
    
    if (dk1 && dk2 && dk3 && dk4) {
        mul = i
        break
    }
    i++
}

console.log(mul)
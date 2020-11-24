function stringMatch(str1, str2) {

    if (!str2.includes(str1)) {
        return '';
    }
    let length1 = str1.length
    let result = ''
    for (let i = 0; i < str2.length; i++) {

        let temp = str2.slice(i, i + length1)
        if (temp == str1) {
            result += i + ' '
        }
    }
    return result.trim()
}

console.log(stringMatch('peek a boo', 'you speek a bootiful language'))
console.log(stringMatch('p', 'Popup'))
console.log(stringMatch('helo', 'Hello there!'))
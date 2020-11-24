// Chúng tôi không biết câu trả lời mong đợi nên chúng tôi sẽ cố gắng giải quyết vấn đề này bằng cách sử dụng thử
// sự phân chia. Tuy nhiên, nếu giới hạn trên tốt cho số nguyên tố đích được biết trước, sử dụng
// sàng Eratosthenes là một phương pháp hiệu quả hơn nhiều.


// Một số thông tin hữu ích:
// 1 không phải là số nguyên tố.
// Tất cả các số nguyên tố trừ 2 đều là số lẻ.
// Tất cả các số nguyên tố lớn hơn 3 đều có thể viết dưới dạng 6k +/- 1.
// Mọi số n chỉ có thể có một thừa số nguyên tố lớn hơn n.
// Hệ quả của việc kiểm tra tính nguyên thủy của một số n là: nếu chúng ta không thể tìm thấy một số f nhỏ hơn
// hoặc bằng n chia cho n thì n là số nguyên tố: hệ số nguyên tố duy nhất của n là chính n

console.time('t')
function isPrime(n) {
    if (n == 1 || n < 1) return false //không phải số nguyên tố
    if (n < 4) return true // 2, 3
    if (n % 2 == 0) return false // số chẵn chỉ có 2 là số nguyên tố
    if (n < 9) return true // các trường hợp còn lại khi bé hơn 9
    if (n % 3 == 0) return false // chi hết => có hơn 2 ước so

    let sqrtN = Math.sqrt(n)
    let count = 5 // nhằm chỉ xét số lẻ
    while (count <= sqrtN) {
        if (n % count == 0) return false
        
        // nhằm chỉ xét số lẻ count +=2(bắt đầu từ 5)
        if (n % (count + 2) == 0) return false 
        
        count += 6
    }
    return true
}

function stPrime(limit) {
    let count = 1;
    let candidate = 1
    while (count != limit) {
        candidate += 2
        if (isPrime(candidate)) {
            count += 1
        }
    }
    return candidate
}

console.log(stPrime(10001))
console.timeEnd('t')
function solution(phone_book) {
    let hash = {};
    
    // { '12': true, '123': true, '1235': true, '567': true, '88': true }
    for (let i = 0; i < phone_book.length; i++) {
        hash[phone_book[i]] = true;    
    }
    
    
    // 12 123 1235 567 88
    for (const number in hash) {
        for (let j = 1; j < number.length; j++) {
            if (hash[number.slice(0, j)]) {
                return false
            }
        }
    }
    
    return true
}


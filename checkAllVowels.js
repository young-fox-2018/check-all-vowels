function checkAllVowels(str) {
    let consonant = 'bcdfghjklmnpqrstvwxyz'
    let temp = 0
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < consonant.length; j++) {
            if (str[i] === consonant[j]) {
                temp++
                if (temp > 0) {
                    return false
                }
            }            
        }
    }
    return true
}

// Test Cases
console.log(checkAllVowels('uiueo')) // true
console.log(checkAllVowels('ajagijig')) // false
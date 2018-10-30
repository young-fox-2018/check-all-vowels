function checkAllVowels(str) {
    const vowels = ['a', 'i', 'u', 'e', 'o']
    let count = 0
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count++
            }
        }        
    }
    if (count === str.length) {
        return true
    }
    else {
        return false
    }
}

console.log(checkAllVowels('haihu'))
console.log(checkAllVowels('aioeu'))

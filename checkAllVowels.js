function checkVowel(str) {
    let lowerCase = str.toLowerCase()
    let result = true

    for(let i = 0; i < str.length; i++) {
        if(lowerCase[i] === 'a' || lowerCase[i] === 'i' || lowerCase[i] === 'u' || lowerCase[i] === 'e' || lowerCase[i] === 'o') {
            result = true
        } else {
            return false
        }
    }

    return result
}

console.log(checkVowel('AaaaA'))
function checkVowel (str) {
    const vocals = ['a','i','u','e','o']
    
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vocals.length; j++) {
            if (str[i] === vocals[j]) counter++
        }
    }
    if (counter === str.length) return true
    else return false
}

console.log(checkVowel('oioioi'))
console.log(checkVowel('kata'))
function checkVowels(str) {
    var string = str.toLowerCase();
    var result = true
    for (let i = 0; i < string.length; i++) {
        if(string[i] !== 'a' && string[i] !== 'i' && string[i] !== 'u' && string[i] !== 'e' && string[i] !== 'o')
            result =  false
    }
    return result
}

console.log(checkVowels('aaaiiuuueet'))
console.log(checkVowels('aaaiiuuueee'))
console.log(checkVowels('ataiiuuueee'))
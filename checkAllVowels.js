
function checkVowels(str) {
    const vowels = ['a', 'i', 'u', 'e', 'o']
    let countVowel = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (vowels[j] === str[i]) {
                countVowel++;
            }
        }
        if (countVowel === str.length) {
            return true;
        }
    }
    return false;
}

console.log(checkVowels('uuiiaaooiiee'))
console.log(checkVowels('vowels'))
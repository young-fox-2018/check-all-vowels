function checkAllVowels(str) {
    let vocals = ["a", "i", "u", "e", "o"]
    var isVocal = 0
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vocals.length; j++) {
            if (str[i] === vocals[j]) {
                isVocal += 1
            }
        }
    }
    if (isVocal === str.length) return true
    else return false

}
console.log(checkAllVowels('aiueo'));
console.log(checkAllVowels('racecar'));
console.log(checkAllVowels('recacar')); 
var checkVowel = (str) => {
    let kamus = ['a', 'i', 'u', 'e', 'o'],
        check = []
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < kamus.length; j++) {
            if (str[i].toLowerCase() === kamus[j]) {
                check.push(kamus[j])
            }
        }
    }
    if (check.length === str.length) return true
    return false

}
console.log(checkVowel('iudfadfseo'))

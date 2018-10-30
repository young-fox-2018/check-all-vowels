function checkVowel(param) {
    var vow = 'aiueo'
    var check = true

    if (param == "") {
        return false
    }

    for (let i = 0; i < param.length; i++) {
        for (let j = 0; j < vow.length; j++) {
            if (param[i].toLowerCase() != vow[i].toLowerCase()) {
                check = false
            }
        }
        
    }

    if (check == true) {
        return true
    }
    return false
    
}

console.log(checkVowel("ai"));
console.log(checkVowel(""));
console.log(checkVowel("abcde"));


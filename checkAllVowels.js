function checkVowel(str){
    let vocals = "aiueo"; let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == "a" || str[i].toLowerCase() == "i" || str[i].toLowerCase() == "u" || str[i].toLowerCase() == "e" || str[i].toLowerCase() == "o") {
            count += 1
        }
    }
    if (str.length == count) {
        return true
    } else {
        return false
    }
}


// testcase
console.log(checkVowel("aaiiuueeoo"))
console.log(checkVowel("%6836aaui"))
console.log(checkVowel("AIUEO"))
console.log(checkVowel("omg"))
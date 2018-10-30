function checkAllVowels(str) {
    var vokal = ['a', 'i', 'u', 'e', 'o'];
    for (let i = 0; i < str.length; i++) {
        var check = false;
        for (let j = 0; j < vokal.length; j++) {
            if (str[i] === vokal[j]) {
                check = true;
                break;
            }
        }
        if (check === false) {
            return false
        }
    }
    if (check === true) {
        return true
    }
}
console.log(checkAllVowels('aio'));
console.log(checkAllVowels('aioz'));
console.log(checkAllVowels('aizo'));
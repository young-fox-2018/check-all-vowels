function checkAll(words) {
    var lowerCasewords = words.toLowerCase();
    for (var i = 0; i < lowerCasewords.length;i++) {
        if (lowerCasewords.charCodeAt(i) != 97 && lowerCasewords.charCodeAt(i) != 101 && lowerCasewords.charCodeAt(i) != 105 && lowerCasewords.charCodeAt(i) != 111 && lowerCasewords.charCodeAt(i) != 117) {
            result = false;
            break;
        } else {
            result = true;
        }
    }
    
    return result;
}

console.log(checkAll("AEIOU"));
console.log(checkAll("aeiou"));
console.log(checkAll("AeioU"));
console.log(checkAll("STASDADaa"));
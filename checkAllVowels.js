function checkVowels(str) {
  var notVowels = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ "
  var notVowelsUpperCase = notVowels.toUpperCase()
  var check = false
  for (var i = 0; i < str.length; i++) {
    if (notVowels.indexOf(str[i]) !== -1) {
      check = false
      break
    }
    else {
      check = true
    }
  }
  return check
}

console.log(checkVowels("ai"));
console.log(checkVowels(""));
console.log(checkVowels("abcde"));

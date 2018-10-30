function checkVowel(str){
    var vokal = "aeiouAIUEO"
    var isVocal = true

    for(var i=0; i<str.length; i++){
        for(var j=0; j<vokal.length; j++){
            if(str[i] === vokal[j]){
                isVocal = true
                break
            }
            else{
                isVocal = false
            }
        }
        if(isVocal === false){
            return isVocal
        }
    }
    return isVocal
}

console.log(checkVowel("aaaaaa"))
console.log(checkVowel("aaaaaaiiiuuueooo"))

console.log(checkVowel("aaaaiiuuoob"))
console.log(checkVowel("baaiiiauuua"))
console.log(checkVowel("aaiibooaaee"))

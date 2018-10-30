function checkVowels(str){
    str = str.split("")
    var vowels = "aiueo"

    for (var i = 0 ; i < str.length ; i++){
        for(var iVowels = 0 ; iVowels < vowels.length ; iVowels++){
            if(str[i] === vowels[iVowels]){
                str[i] = true
                break;
            }
        }
    }
    
    for(var iStr = 0 ; iStr < str.length ; iStr++){
        if(str[iStr] !== true){
            return false
        }
        
        if(iStr === str.length-1){
            return true
        }
    }
}

console.log(checkVowels("aaaa")); //TRUE
console.log(checkVowels("bcef")); //FALSE
console.log(checkVowels("eeef")); //FALSE
console.log(checkVowels("apa")); //FALSE
console.log(checkVowels("eee")); //FALSE


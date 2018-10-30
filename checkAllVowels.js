function checkVowels(str){
    str = str.toLowerCase().split("")
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

console.log(checkVowels("aaAA")); // TRUE
console.log(checkVowels("bcef")); // FALSE
console.log(checkVowels("eEef")); // FALSE
console.log(checkVowels("aPa")); // FALSE
console.log(checkVowels("eee")); // TRUE


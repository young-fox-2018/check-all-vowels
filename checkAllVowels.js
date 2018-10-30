function checkVowel(str){
    var vowels = "aiueo";
    var result 
    var cont = [];
    
    for(var i = 0; i < str.length; i++){
        var check = false;
        for(var j = 0; j < vowels.length; j++){
            if(str[i] == vowels[j]){
                check = true;
            }
        }
        if (check == false){
            cont.push(str[i])
        }
    }
    if(cont.length === 0){
        return true
    }else{
        return false
    }

    
    
}

console.log(checkVowel("app"))
console.log(checkVowel("pp"))
console.log(checkVowel("ai"))
console.log(checkVowel("aiiiii"))
console.log(checkVowel("apppa"))

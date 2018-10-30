function checkVowels(str){
    var arr = ["a","i","u","e","o"];
    var result = ""
    for(var i = 0; i < str.length; i++){
        if( str[i] !== arr[0] && str[i] !== arr[1] && str[i] !== arr[2] && str[i] !== arr[3] &&str[i] !== arr[4]){
            result += str[i]
        }
    }

    if(result.length === 0 ){
        return true
    }else{
        return false
    }
}

console.log(checkVowels("aaaaa"))
console.log(checkVowels("aiueooo"))
console.log(checkVowels("aiuopq"))
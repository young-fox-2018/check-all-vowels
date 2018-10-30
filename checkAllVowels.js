function checkVowel(input){
    var cond = true
    var i = 0
    while(cond && i < input.length){
        if(input[i] !== 'a' && input[i] !== 'e' && input[i] !== 'i' && input[i] !== 'o' && input[i] !== 'u'){
            cond = false
        }
        i++
    }
    return cond  
}
console.log(checkVowel('saya'))
console.log(checkVowel('aa'))
console.log(checkVowel('aiueo'))

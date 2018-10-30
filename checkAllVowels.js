function checkAllVowels(str){
    var vowels = ['a','i','u','e','o']
    var finded = false
    for(i=0;i<str.length;i++){
        finded = false
        for(j=0;j<vowels.length;j++){
            if(str[i].toLowerCase() === vowels[j]){
                finded = true
            }
        }

        if(!finded){
            return false
        }
    }
    return true
}

console.log(checkAllVowels('AAIIxUUEEOO')) // FALSE
 
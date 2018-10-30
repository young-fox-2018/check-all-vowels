function allVocal(str){
    const dictionary = ['a', 'i', 'u', 'e', 'o']

    let counter = 0

    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < dictionary.length; j++){
            if(str[i] === dictionary[j]){
                counter ++
            }
        }
    }

    if(counter === str.length) return true
    else return false
}

console.log(allVocal("aabaa"))
console.log(allVocal("aeaaiuao"))
let wordsLib = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']

function checkVowels(str){
    for (let k = 0; k < str.length; k++) {
        for(let i = 0; i < wordsLib.length; i++){
            if(str[k] === wordsLib[i]){
                return 'not all vowel'
            }
        }
    }
    return 'all vowel'
}

console.log(checkVowels('apadehh'))
console.log(checkVowels('auouououoooo'))
console.log(checkVowels('ea ea ea'))
console.log(checkVowels('blegedel duel'))
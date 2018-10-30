
function checkVowel(str){

  var result = ''

  for(var i = 0 ; i < str.length ; i++){
    if(str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u'){
      result+= str[i]
    }
  }

  if(result.length !== 0){
    return false
  }else{
    return true
  }
}

console.log(checkVowel('aeuiio')) ;
console.log(checkVowel('aepio'))
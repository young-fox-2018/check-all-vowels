function checkVowel(str){
  const notvowel = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
  var result = true
  for(let i=0;i<str.length;i++){
    for(let j=0;j<notvowel.length;j++){
      if(str[i]===notvowel[j]){
        result = false
        console.log(result)
        return result
      }
    }
  }
  console.log(result)
  return result
}


checkVowel('ajklsi')

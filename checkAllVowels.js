
function checkAllVowels(input){
    
    var str = input.toLowerCase();
    // var vowels = "aiueoAIUEO"
    for(var i = 0; i < str.length; i++){
        // console.log(input[i])
        if(str[i] === "a" || str[i] === "i" || str[i] === "u" || str[i] === "e" || str[i] === "o"){
            return true
        } 
    }
    return false
}
console.log(checkAllVowels("Hello World"));
console.log(checkAllVowels("aaaaAAAiiiiiiRRRR"));
console.log(checkAllVowels("modern misery"));
console.log(checkAllVowels("modern misery"));
console.log(checkAllVowels("aurora"));
console.log(checkAllVowels("kkkkkk"));

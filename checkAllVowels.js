function checkVowel(str) {

    var char = ['a', 'e', 'i', 'o', 'u'];
    var vowels = true;

    var i = 0;
    while (vowels && i < str.length) {

        var vowelsFound = false;
        for (var j = 0; j < char.length; j++) {
            if(char[j] === str[i]) {
                vowelsFound = true;
            }
        }

        if(!vowelsFound) vowels = false;
        
        i++;
    }

    return vowels;
}

console.log(checkVowel('aeiouaeiou'));
console.log(checkVowel('opaaeioa'));
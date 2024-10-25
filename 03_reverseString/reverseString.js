const reverseString = function(word) {
    
    // return string.split("").reverse().join("");  - correct solution using string methods
    let string = '';
    for(let i = word.length; i >= 0; i--){
        string += word.charAt(i);
    }

    return string;
};

// Do not edit below this line
module.exports = reverseString;

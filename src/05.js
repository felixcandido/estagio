const reverseString = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Informe a String
const reversedString = reverseString("string");
console.log(reversedString);
export function romanToInteger(str) {
    let result = 0;
    const letters = {
        'M': 1000,
        'D': 500, 
        'C': 100,
        'L': 50, 
        'X': 10,
        'V': 5,
        'I': 1
    };
    for (let i = 0; i<str.length-1; i++) {
        if (letters[str[i]]<letters[str[i+1]]) {
            result-=letters[str[i]]
        }
        else {
            result+=letters[str[i]]
        }
    }
    result += letters[str[str.length-1]]
    return result;
}

document.getElementById("translateBtn").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    const outputField = document.getElementById("outputText"); 
    
    const translations = {
        "A" : ".- ", "a" : ".- ",
        "B" : "-... ", "b" : "-... ",
        "C" : "-.-. ", "c" : "-.-. ",
        "D" : "-.. ", "d" : "-.. ",
        "E" : ". ", "e" : ". ",
        "F" : "..-. ", "f" : "..-. ",
        "G" : "--. ", "g" : "--. ",
        "H" : ".... ", "h" : ".... ",
        "I" : ".. ", "i" : ".. ",
        "J" : ".--- ", "j" : ".--- ",
        "K" : "-.- ", "k" : "-.- ",
        "L" : ".-.. ", "l" : ".-.. ",
        "M" : "-- ", "m" : "-- ",
        "N" : "-. ", "n" : "-. ",
        "O" : "--- ", "o" : "--- ",
        "P" : ".--. ", "p" : ".--. ",
        "Q" : "--.- ", "q" : "--.- ",
        "R" : ".-. ", "r" : ".-. ",
        "S" : "... ", "s" : "... ",
        "T" : "- ", "t" : "- ",
        "U" : "..- ", "u" : "..- ",
        "V" : "...- ", "v" : "...- ",
        "W" : ".-- ", "w" : ".-- ",
        "X" : "-..- ", "x" : "-..- ",
        "Y" : "-.-- ", "y" : "-.-- ",
        "Z" : "--.. ", "z" : "--.. ",
        "1" : ".---- ", "2" : "..--- ", "3" : "...-- ", "4" : "....- ", "5" : "..... ",
        "6" : "-.... ", "7" : "--... ", "8" : "---.. ", "9" : "----. ", "0" : "----- ",
        " " : "/ "
    };

    // 1. Convert string to array of characters
    // 2. Map each character to its translation (or empty string if not found)
    // 3. Join them back together
    const result = inputText
        .split('')
        .map(char => translations[char] || '') 
        .join('');

    outputField.value = result; // Display the result
});
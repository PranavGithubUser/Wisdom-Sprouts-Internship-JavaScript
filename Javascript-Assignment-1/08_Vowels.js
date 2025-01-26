function countVowelsAndConsonants(str) {
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();

        if ("aeiou".includes(char)) {
            vowelCount++;
        } else if (char >= 'a' && char <= 'z') {
            consonantCount++;
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

const result = countVowelsAndConsonants("Pranav");
console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`);

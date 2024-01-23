// run with: node script.js filename.txt

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

const fs = require('fs');
const filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    const textArray = data.split('\n');

    // Find the shortest word containing all 5 vowels
    const shortestWordWithAllVowels = textArray.reduce((shortest, word) => {
        if (
            word.includes('A') &&
            word.includes('E') &&
            word.includes('I') &&
            word.includes('O') &&
            word.includes('U') &&
            (!shortest || word.length < shortest.length)
        ) {
            return word;
        }
        return shortest;
    }, '');

    console.log('Shortest word with all 5 vowels:', shortestWordWithAllVowels);
});
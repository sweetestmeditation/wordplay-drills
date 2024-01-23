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

    // Example: solve for words without 'E' or 'A' and at least 15 letters long
    const wordsWithoutEorA = textArray.filter(word => {
        const lowercaseWord = word.toLowerCase();
        return lowercaseWord.length >= 15 && !lowercaseWord.includes('e') && !lowercaseWord.includes('a');
    });

    console.log(wordsWithoutEorA);
});
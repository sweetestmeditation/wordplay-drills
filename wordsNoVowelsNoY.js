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

    // Example: solve for words with no vowels and no 'Y'
    const wordsNoVowelsNoY = textArray.filter(word => {
        return !/[AEIOUYaeiouy]/.test(word) && !word.includes('Y');
    });

    console.log(wordsNoVowelsNoY);
});
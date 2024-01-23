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

    // Count occurrences of letters Q, X, and Z
    const letterCounts = {
        Q: 0,
        X: 0,
        Z: 0,
    };

    textArray.forEach(word => {
        letterCounts.Q += (word.match(/Q/g) || []).length;
        letterCounts.X += (word.match(/X/g) || []).length;
        letterCounts.Z += (word.match(/Z/g) || []).length;
    });

    // Find the least common letter
    const leastCommonLetter = Object.keys(letterCounts).reduce((leastCommon, letter) => {
        if (letterCounts[letter] < letterCounts[leastCommon]) {
            return letter;
        }
        return leastCommon;
    }, 'Q');

    console.log('The least common letter is:', leastCommonLetter);
});
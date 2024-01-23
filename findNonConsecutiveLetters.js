// run with: node script.js filename.txt

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

const fs = require('fs');
const filename = process.argv[2];

// Function to find letters that never appear consecutively
const findNonConsecutiveLetters = (word) => {
    const consecutiveLetters = word.match(/(.)\1/g); // Match consecutive letters
    const uniqueConsecutiveLetters = new Set(consecutiveLetters); // Get unique consecutive letters
    return Array.from(uniqueConsecutiveLetters);
};

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    const textArray = data.split('\n');

    // Set to store letters that never appear consecutively
    const nonConsecutiveLettersSet = new Set();

    // Iterate through words and find non-consecutive letters
    textArray.forEach(word => {
        const consecutiveLetters = findNonConsecutiveLetters(word);
        consecutiveLetters.forEach(letter => nonConsecutiveLettersSet.add(letter));
    });

    // Convert set to an array and sort alphabetically
    const nonConsecutiveLetters = Array.from(nonConsecutiveLettersSet).sort();

    console.log('Letters that never appear consecutively:', nonConsecutiveLetters);
});

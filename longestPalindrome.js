// run with: node script.js filename.txt

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

const fs = require('fs');
const filename = process.argv[2];

// Function to check if a word is a palindrome
const isPalindrome = (word) => {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
};

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    const textArray = data.split('\n');

    // Find the longest palindrome
    let longestPalindrome = '';
    textArray.forEach(word => {
        if (isPalindrome(word) && word.length > longestPalindrome.length) {
            longestPalindrome = word;
        }
    });

    console.log('Longest palindrome:', longestPalindrome);
});

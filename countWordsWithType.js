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

    // Count words containing the substring "TYPE"
    const countWordsWithType = textArray.reduce((count, word) => {
        return count + (word.includes('TYPE') ? 1 : 0);
    }, 0);

    console.log('Number of words containing "TYPE":', countWordsWithType);
});

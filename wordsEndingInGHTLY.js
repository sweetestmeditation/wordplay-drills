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

    // Create array of words ending in "GHTLY"
    const wordsEndingInGHTLY = textArray.filter(word => word.endsWith('GHTLY'));

    console.log(wordsEndingInGHTLY);
});
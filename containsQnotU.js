// run with node index.js sowpods.txt

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
    }

    // Read the file and print its contents.
    const fs = require('fs')
    const filename = process.argv[2];
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) throw err; // throw an error if we can't read the file
        const textArray = data.split('\n'); // split the text out into a JavaScript array

        // Example: solve for words containing 'Q' but not 'U' in the array
        const wordsWithQNotU = [];

        textArray.forEach(word => {
            if (word.match(/q/i) && !word.match(/u/i)) {
                wordsWithQNotU.push(word);
            }
        });

    console.log(wordsWithQNotU);
});
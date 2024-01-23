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
        const textArray = data.split('\n') // split the text out into a javascript array

    //Example solve for XYZ string in the array
    let XYZarr = [] // Create an empty array called XYZArr to store matching elements
    textArray.forEach((text) => { // iterate through all strings
        if (text.includes('X') && text.includes('Y') && text.includes('Z')) { // If all three letters are present
            XYZarr.push(text); // Add the element to XYZarr
        } // Close the if statement
    }); //Close the forEach method
    console.log(XYZarr)

    /*
    let XYZarr = []
    textArray.forEach((text) => {
        if (text.includes('XYZ')) XYZarr.push(text)
    }) */
});  
// run with node containsUU.js sowpods.txt

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
  
    // example solve for `UU` string in the array
    let UUArr = [] // set up an empty array
    textArray.forEach((text) => { // iterate through all strings
      if (text.includes('UU')) UUArr.push(text) // only push strings that match to the array
    })
    console.log(UUArr) // log our output
  });
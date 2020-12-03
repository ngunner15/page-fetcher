const request = require('request');
const args = process.argv.slice(2);
const fs = require('fs');

function fetcher(url, file) {
  request(url, (error, response, body) => {
    if (response.statusCode !== 200) {
      console.log("terminating function because of: ",response.statusCode)
      return;
    }
    console.log('error:', error); // Print the error if one occurred
    fs.writeFile(file, body , error => {
      console.log("Error:" ,error);
    });
    console.log(`Downloaded and saved ${file.length} bytes to ${file}`);
  });
}

fetcher(args[0], args[1]);
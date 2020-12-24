var fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Add The Name of the how  to', name => {
readline.question('add the how to (to have multible lines  Write <br> for it to  work!)', name2 =>{
    console.log(`Installing ${name} And ${name2}`);
    readline.close();
    var logger = fs.createWriteStream('howto.html', {
        flags: 'a' // 'a' means appending (old data will be preserved)
      })
      logger.write(`<!DOCTYPE html>
      <html>
      <head>
      <title>How To!</title>
      </head>
      <body>
      
      <h1>${name}</h1>
      <p>${name2}</p>
      
      </body>
      </html>`)

})});           

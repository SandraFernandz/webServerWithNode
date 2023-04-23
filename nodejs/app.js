const https = require('http');
const fs = require('fs');

https
  .createServer(function (req, res) {
    if (req.url === '/') {
      fs.createReadStream(__dirname + 'index.htm').pipe(res);
    }

    if (req.url === '/api') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      var obj = {
        firstname: 'Kermit',
        lastname: 'The Frog',
      };
      res.end(JSON.stringify(obj));

      // mapping the port- ip address standard local system- local host
    }
  })
  .listen(1337, '127.0.0.1');

// run with writing in the command line from nodejs folder

// node app.js

//localhost:1337 in the browser
// you can see the request in devTools under Network localhost

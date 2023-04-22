const https = require('http');
const fs = require('fs');

https
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const html = fs.readFileSync(__dirname + '/index.htm');
    res.end(html);

    // mapping the port- ip address standard local system- local host
  })
  .listen(1337, '127.0.0.1');

// run with writing in the command line from nodejs folder

// node app.js

//localhost:1337 in the browser
// you can see the request in devTools under Network localhost

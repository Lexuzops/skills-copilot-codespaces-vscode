// Create web server
// Create a new web server that listens on port 3000. 
// When you visit http://localhost:3000/ in your browser, 
// it should display the message "Hello, world!" in the browser window.

// 1. Import the http module.
// 2. Create a new web server.
// 3. Listen on port 3000.

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, world!');
});

server.listen(3000);
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');

    // res.end('<h1>Hello, Node.js!</h1>');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>Welcome to the Home Page!</h1>');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1>About Us</h1><p>We are a Node.js web server!</p>');
    } else {
        res.statusCode = 200;
        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})
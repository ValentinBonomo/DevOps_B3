"use strict";
const http = require("http");
const host = 'localhost';
const port = 8080;
const requestListener = function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("My first server!");
    }
    else if (req.url === '/ping') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(req.headers, null, 2));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end();
    }
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

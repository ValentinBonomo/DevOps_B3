const http = require("http");
const host = 'localhost';
const port = process.env.PING_LISTEN_PORT ?? 8080;

const requestListener = function (req: any, res: any) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Hello World!");
    } else if (req.url === '/ping') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(req.headers, null, 2));
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end();
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


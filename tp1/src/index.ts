const http = require("http");
const os = require("os");

const host = 'localhost';
const port = process.env.PING_LISTEN_PORT ?? 3000;

const requestListener = function (req: any, res: any) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Hello World!");
    } else if (req.url === '/ping') {
        const hostname = os.hostname();
        console.log(`${hostname}`);
        
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ hostname, headers: req.headers }, null, 2));
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end();
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

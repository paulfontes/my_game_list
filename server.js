// server.js
const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Having fun with Docker and Node 🐳\n');
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
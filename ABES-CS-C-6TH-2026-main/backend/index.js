const http = require ("http");
const fs = require ("fs").promises;
const PORT = 3000;

const server = http.createServer (async (req, res) => {
    
});
server.listen (PORT, () => {
    console.log (`Server is running on port ${PORT}`);
});
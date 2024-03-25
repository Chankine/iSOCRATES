const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.write('<p>Hello iSOCRATES</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
})
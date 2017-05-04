var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    if (req.method == 'POST') {
        whole = ''
        req.on('data', function(chunk) {
            whole += chunk.toString()
        });

        req.on('end', function() {
            console.log(whole)
            res.writeHead(200, 'OK', {'Content-Type': 'application/json'})
            res.end('{ "version": "1.0", "response": { }}')
        });
    }
    console.log(req.method+', '+req.url+', '+JSON.stringify(req.headers)+", "+req.body);
}).listen(61000);

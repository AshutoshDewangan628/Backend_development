var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
    fs.readFile('test.html', function(err, data) {
        if (err) {
            // Handle the error by sending an appropriate response
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.write("Error reading the file");
            return res.end();
        }

        // Set the correct Content-Type header
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
}).listen(5000);

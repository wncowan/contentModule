var content = require('./content')
    http    = require('http'),
    fs      = require('fs');

var server = http.createServer(function(req,res) {
    if (req.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end()
        });
    } else if (req.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end();
        });
    } else if (req.url === '/cars/new') {
        fs.readFile('./views/carform.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end();
        });
    } else {
        content(req, res)
    };
});

server.listen(8000);
console.log("Running at localhost 8000");
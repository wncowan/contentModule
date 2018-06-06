module.exports = function(req, res) {

    if (req.url.indexOf('stylesheet')>-1) {
        
        fs.readFile(`./${req.url}`, 'utf8', function(errors, contents){
            if (errors) {
                console.log(errors);
            } else {
                res.writeHead(200, {'Content-type': 'text/css'});
                res.write(contents);
                res.end();
            } 
        });
    } else if (req.url.indexOf('image')>-1) {
        
        fs.readFile(`./${req.url}`, function(errors, contents){
            if (errors) {
                console.log(errors);
            } else {
                res.writeHead(200, {'Content-type': 'img/jpg'});
                res.write(contents);
                res.end();
            } 
        });
    }
    else {
        fs.readFile('./views/error.html', 'utf8', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end();
        });
    }
}

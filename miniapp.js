var http = require('http'),
    sys = require('sys'),
    rest = require('./restler/lib/restler'),
    jade = require('./jade');

http.createServer(function (req, res) {
  if ("favicon.ico" != github_username) {
    var github_username = req.url.replace(/\//, "");
    rest.get("http://github.com/api/v2/json/repos/show/" + github_username, {
      data: {},
    }).addListener('complete', function(data, github_response) {
      if (github_response.statusCode == 200) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        jade.renderFile('view.jade', { locals: {data: data} }, function(err, html){
          res.end(html);
        });
      }
    }).addListener('error', function(data) {
      // TODO: give a shit
    });
  }
}).listen(3000, "67.23.3.57");

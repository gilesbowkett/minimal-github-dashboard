var http = require('http'),
    sys = require('sys'),
    rest = require('./restler/lib/restler'),
    Mu = require('./mu/lib/mu');

http.createServer(function (req, res) {
  rest.get("http://gilesbowkett:Vclg0'$akj@github.com/api/v2/json/repos/show/gilesbowkett", {
    data: {},
  }).addListener('complete', function(data, github_response) {
    if (github_response.statusCode == 200) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      var template = "Hello fool. Your name is: {{name}}!", partials = {}, compiled = Mu.compileText(template, partials);
      compiled({data: data}).addListener('data', function (c) { res.write(c); res.write(JSON.stringify(data)); res.end("fuck yeah"); });
    }
  });
}).listen(3000, "127.0.0.1");


var http = require('http'),
    sys = require('sys'),
    rest = require('./restler/lib/restler');

http.createServer(function (req, res) {
  rest.get("http://gilesbowkett:Vclg0'$akj@github.com/api/v2/json/repos/show/gilesbowkett", {
    data: {},
  }).addListener('complete', function(data, github_response) {
    sys.puts(JSON.stringify(data));
    if (github_response.statusCode == 200) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(JSON.stringify(data));
      res.close();
    }
  });
}).listen(3000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/');


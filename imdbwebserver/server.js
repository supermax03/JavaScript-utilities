var http = require("http");
var infomdb = require("./request");
http.createServer(function(req, res){
var body="";
var send = function(str){
 res.writeHead(200, {"Content-type": "text/html"});
  res.end(str);
};
  var show = req.url;
  new infomdb(show, function(json){
        send(json);
  });
}).listen(9000);

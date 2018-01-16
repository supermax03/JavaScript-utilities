var events = require("events");
var eventEmitter = events.EventEmitter;
var ee = new eventEmitter();
var fs = require("fs");

var cursor = 0;
var directories = ["test","test/a","test/b"];
ee.on("created", function(name){
        console.log("A directory has been created: ", name);
        var n = next();
        if(n!==false) mkdir(n);

});
var next = function(){
  return cursor == directories.length ? false : directories[cursor++];
};
var mkdir = function(name){
    var _mkdir = function(){
        fs.mkdir(name, function(e){
           if(e) console.log(e);
           ee.emit("created", name);
        });//end fs.mkdir
    };//end _mkdir
       fs.exists(name, function(e){
         if(e){
            fs.rmdir(name,function(){
              ee.emit("deleted",name);
              _mkdir();
             });//end fs.rmdir
          }else{
             _mkdir();
          }//end else
       });//end exits
};
mkdir("test1");
var item = next();
if(item!==false) mkdir(item);
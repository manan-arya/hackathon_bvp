
function clicked(){
  var {PythonShell} = require("python-shell");
  var path=require("path");
  console.log("clicked");
 //var path = require("path")
 var options = {
    mode : 'json',
    args:[{"name":"ankit"}]
  }

 var pyshell=new PythonShell('./helloWorld.py',options);
 pyshell.send('hello');
 pyshell.on('message', function (message) {
   // received a message sent from the Python script (a simple "print" statement)
   console.log(message);
 });
}

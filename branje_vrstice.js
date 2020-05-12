var a="ss";
var b="tessssst";

var readline = require('readline');

var rl = readline.createInterface({  /// isto kukr java scanner
    input: process.stdin,
    output: process.stdout
    
});
    
rl.question("a ali b  ", function(answer) {
       if(answer == "a"){
           console.log(a);
       }
       else{
           console.log(b);
       }
       rl.close();
    });
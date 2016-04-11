# request-header

## Install ##

````
npm install request-header
````

## Example ##

````
var myHead = require("./index.js");
myHead.host = "www.google.com:80";
myHead.connection = "close";
myHead.method = "GET"
console.log(myHead.header());

````

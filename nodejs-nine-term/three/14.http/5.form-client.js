var http = require("http");
var querystring = require("querystring");
var options = {
    hostname:"localhost",
    port:8080,
    headers:{
        'Content-Type':"application/x-www-form"
    },
    path:"/",
    method:"POST"
}
var request = http.request(options,function(response){
    response.setEncoding("utf-8");
    var result = "";
    response.on("data",function(data){
        result += data;
    });
    response.on("end",function(data){
        console.log(JSON.parse(result));
    });
});
request.write(quertystring.stringify({name:"jth"}));
request.end();
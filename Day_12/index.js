var http=require("http");//help us to call function which are present in http
var dt=require('./myModule')
http.createServer(function(req,res){
    res.write('The date is '+dt.myDate())
}).listen(5000)
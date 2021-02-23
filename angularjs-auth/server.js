const express= require('express');
const app = express();
const path=require('path');

app.use('/',express.static(__dirname +'/'));

app.get('/*',function (req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

/*var server = app.listen(3000, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
})*/
const hostname='localhost';
const port=3000;
const server =app.listen(port,hostname,()=>{
    console.log(`Server listening at http://${hostname}:${port}`);

});

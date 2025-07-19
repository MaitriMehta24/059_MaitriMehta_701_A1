var http=require("http");

var server=http.createServer((req,res)=>{
    res.end("server is running...");
})

server.listen(8000,()=>{
    console.log('Server listening on http://localhost:8000');
});


const express =require("express")
const log=require("emoji-log-level")
const app=express();
app.use(express.static("./static")); //built in middleware
app.use(express.urlencoded({"extended":true})) //built in middleware

app.get("/processgetform",(req,res)=>{
    res.send(req.query.first_name+"     "+req.query.last_name);
});


app.listen(8000,()=>{
    log.info("Server started http://localhost:8000")
});


import { info, warn, error, debug } from './index.js';
import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    res.send("this is the default page");
    info("this is the default page")
    res.end();
})


app.listen(8000,()=>{
    info("the server is running on http://localhost:8000");
    warn("malware alert")
})

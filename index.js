const express=require('express');
const app=express();
app.get("/test",(req,res)=>{
    return res.send("Hello");
})
app.listen(3000,()=>{
    console.log("server running on post 3000");
    
})
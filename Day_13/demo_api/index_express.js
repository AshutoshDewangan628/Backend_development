const express=require('express');
const app=express();
const PORT=3000;

app.get('/',(req,res)=>{
    res.send('hello hfh')
})
app.get('/about',(req,res)=>{
    res.send("this is about page")
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
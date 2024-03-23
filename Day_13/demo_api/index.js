const express=require('express');
const app=express();
const PORT=4000;

app.get('/',(req,res)=>{
    res.send("this is s jds ")
})

const books=[
    {id:1,title:"Express",authrt:"Ashutosh"},
    {id:2,title:"Express",authrt:"Ashutosh"},
    {id:3,title:"Express",authrt:"Ashutosh"}
]

app.get('/',(req,res)=>{
    res.send("This is a page")
})

app.get('/api/book',(req,res)=>{
    res.json(books);
})

app.get('/api/book/:id',(req,res)=>{
    const bookId=parseInt(req.params.id);
    const book=books.find((b)=>b.id===bookId);
    if(book){
        res.json(book);
    }
    else{
        res.status(404).json({message:"This book id not present in json"})
    }

})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});
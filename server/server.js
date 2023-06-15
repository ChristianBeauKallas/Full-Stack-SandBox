const express = require('express');
const app = express(); // this is an instance of the express method
const PORT = 3001

//MIDDLEWARE
app.use(express.json())

app.get("/", (request,response)=>{
    response.status(200)
    response.write("<h1> Home For SuperHero App </h1>")
    response.end()
})

app.get("/heroes", (req, res)=>{
    res.status(200)
    res.write("<h2> Batman </h2>")
    res.end()
})

app.post("/heroes", (req, res)=>{
    res.status(201)
    const responseBody = {
        body: req.body,
        url: req.url,
        method: req.method
    }
    res.json(responseBody)
    res.end()
})

app.listen(PORT, ()=> {
    console.log(`server is listening at port ${PORT}`)
})
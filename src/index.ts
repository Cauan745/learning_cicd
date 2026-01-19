import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello world!"
    })
})

app.get("/:name", (req, res) => {
    const name = req.params.name
    
    res.json({
        message: `Hello ${name}!`,
        name
    })
})

app.get("/completed", (req,res)=>{
    res.header("Content-Type: text/html; charset=utf-8")

    res.send("<h1>The Github Actions and Docker deployment to VPS is complete!</h1>")
})

app.listen(port, ()=>{
    console.log("Server Running on Port:" + port)
})
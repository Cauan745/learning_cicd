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

app.listen(port, ()=>{
    console.log("Server Running on Port:" + port)
})
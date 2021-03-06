const port = 3030;

const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public")

app.use(express.static(publicPath));

app.listen(process.env.PORT || port, () => console.log ("Servidor funcionando"));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/home.html"))
})

app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/login.html"))
})

app.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/register.html"))
})

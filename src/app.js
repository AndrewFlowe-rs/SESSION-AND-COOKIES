const express = require('express');
const app = express()
const path = require('path')
var cookieParser = require('cookie-parser');
const session = require("express-session")

const port = 3030

//Configs
app.set("view engine", "ejs")
app.set("views",(path.join(__dirname, "./views")));

//Middlewares

app.use(express.static(path.join(__dirname, '../public')));
app.use(cookieParser());
app.use(session({ secret: "palabra secreta" }))

//Rutas 
const otherRutes = require('./controllers/other')
const authRutes = require('./controllers/authentication')

//Enrutadores

app.use("/", otherRutes)
app.use("/auth", authRutes)




//Levantamos ewl servidor

app.listen(port, () => console.log(`http://localhost:${port}`))
const express = require('express');
const app = express()       
 const path = require('path')
 const port = 3030

 //Configs
 app.set("view engine" , "ejs")
 app.set("views" .path.join(__dirname),"./views")

          //Middlewares
        
app.use(express.static(path.join(__dirname, '../public')));

           //Rutas 
    const otherRutes = require('./controllers/other')
const authRutes = require('./controllers/authentication')

        //Enrutadore

    app.use("/", otherRutes)
    app.use("/ath",authRutes)




 //Levantamos ewl servidor

 app.listen(port , () => console.log(`http://localhost:${port}`))
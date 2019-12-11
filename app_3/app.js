const express = require("express");
const cors = require("cors");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
// Config
    //Templates Engine
    app.engine('handlebars',handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars')

    //BodyParser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    //CSS
    app.use(express.static(__dirname+'/views'))   
    
    //CORS
    app.use(cors());

// ROTAS 
    
    //ROTAS DE TESTE CONTROLLER
    app.use("/",require("./routes"));                       

//DEVE SER SEMPRE A ULTIMA LINHA DO SEU CODIGO
app.listen(8081, () =>{
    console.log("Servidor Rodando!");
}); 
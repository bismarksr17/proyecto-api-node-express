const express = require("express")
const sequelize = require("./database/conexion")

//app
const app = express()

//variables
const PORT=3000

//configurar rutas
app.get("/", async function(req, res){
    console.log(req.query.pais)
    const [results, metadata] = await sequelize.query("select * from libros")
    return res.json(results)
    return res.json({mensaje:"Hola mundo desde Node con Express saludos a:" + req.query.pais});
});

//levantar el servidor de node
app.listen(PORT, function(){
    console.log("Servidor iniciado en: http://127.0.0.1:"+PORT)
});


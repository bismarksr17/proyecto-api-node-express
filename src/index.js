const express = require("express")
const sequelize = require("./database/conexion.js")
const Rutas = require("./routes/index.js")

//app
const app = express()

//recepción de json
app.use(express.json())

//variables
const PORT=3000

//configurar rutas
app.get("/", async function(req, res){
    console.log(req.query.pais);
    const [results, metadata] = await sequelize.query("select * from libros");
    return res.json(results);
});

//habilitando rutas
app.use("/api", Rutas);

//levantar el servidor de node
app.listen(PORT, function(){
    console.log("Servidor iniciado en: http://127.0.0.1:"+PORT);
});


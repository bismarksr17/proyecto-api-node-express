const express = require("express");
const sequelize = require("./../database/conexion.js")

const Route = express.Router();

//API CRUD libros (endpoint)
Route.get("/libros", async function(req, res){
    // consulta sql a db
    const [results] = await sequelize.query("SELECT * FROM libros")
    const libros = results;
    return res.json(libros);
});

module.exports = Route
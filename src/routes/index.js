const express = require("express");
const libroController = require("./../controllers/libro.controller.js")

const Route = express.Router();

//API CRUD libros (endpoint)
Route.get("/libros", libroController.funListaLibros);
Route.post("/libros", libroController.funGuardarLibro);
Route.get("/libros/:id", libroController.funMostrarLibro);
Route.put("/libros/:id", libroController.funModificarLibro);
Route.post("/libros/:id", libroController.funEliminarLibro);

module.exports = Route

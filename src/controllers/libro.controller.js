const sequelize = require("./../database/conexion.js");

async function funListaLibros (req, res){
    // consulta sql a db
    const [results] = await sequelize.query("SELECT * FROM libros")
    const libros = results;
    return res.json(libros);
}

async function funGuardarLibro(req, res){
    const {id, titulo, anio_publicacion} = req.body
    const [results] = await sequelize.query(`INSERT INTO libros (id, titulo, anio_publicacion) values(${id}, '${titulo}', ${anio_publicacion})`);
    return res.json({mensaje : "El libro se registro correctamente"});
}

async function funMostrarLibro(req, res){

}
async function funModificarLibro(req, res){

}
async function funEliminarLibro(req, res){

}

module.exports = {
    funListaLibros,
    funGuardarLibro,
    funMostrarLibro,
    funModificarLibro,
    funEliminarLibro
}
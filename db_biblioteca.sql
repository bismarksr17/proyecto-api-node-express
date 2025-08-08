CREATE Database bd_biblioteca;

USE bd_biblioteca;

Create table autores(
    id int auto_increment primary key,
    nombre_completo varchar(200)
);

create table libros (
    id int primary key,
    titulo varchar(200),
    anio_publicacion int
);

create table autor_libro(
    libro_id int,
    autor_id int,
    Foreign key(libro_id) references libros (id),
    Foreign key(autor_id) references autores (id)
);

create table usuarios(
    id int primary key,
    nombre varchar(200),
    email varchar(200) UNIQUE,
    password varchar(200)
);

create table tarjetas(
    id int auto_increment primary key,
    usuario_id int,
    Foreign key(usuario_id) references usuarios (id),
    fecha_emision DATE
);

create table prestamos(
    usuario_id int,
    libro_id int,
    fecha_prestamo DATE,
    fecha_devolucion DATE,
    Foreign key(usuario_id) references usuarios (id),
    Foreign key(libro_id) references libros (id)
);

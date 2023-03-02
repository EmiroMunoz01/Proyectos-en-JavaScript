const express = require("express");
const mysql = require("mysql");

const app = express();

//*********************** */
//establecemos parametros
var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "articulos_db",
});

//probaremos la conexion
conexion.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log("¡Conexion exitosa!");
  }
});

//*********************** */

//configuraremos una ruta, todas las peticiones get por defecto en el navegador se realizan con get

app.get("/", (req, res) => {
  res.send("Ruta INICIO");
});

app.get("/api/articulos", (req, res) => {
  conexion.query('SELECT * FROM articulos', (err, filas) => {
    if (err) {
      throw err;
    }else{
        res.send(filas)
    }
  });
});


//mostrar un solo articulo
app.get("/api/articulos/:id", (req, res) => {
    conexion.query('SELECT * FROM articulos WHERE id = ?',[req.params.id], (err, fila) => {
      if (err) {
        throw err;
      }else{
          res.send(fila)
      }
    });
  });
//el primer parametro es el puerto, el segundo parametro es una f(x) que imprima una salida para verificar que el servidor se ejecuta, o capturar un error

//crearemos una variable para nuestro puerto
const puerto = 7000;

app.listen(puerto, () => {
  console.log("Servidor OK! en puerto: " + puerto);
});

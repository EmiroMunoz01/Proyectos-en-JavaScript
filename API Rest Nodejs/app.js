const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());
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
  conexion.query("SELECT * FROM articulos", (err, filas) => {
    if (err) {
      throw err;
    } else {
      res.send(filas);
    }
  });
});

//mostrar un solo articulo
app.get("/api/articulos/:id", (req, res) => {
  conexion.query(
    "SELECT * FROM articulos WHERE id = ?",
    [req.params.id],
    (err, fila) => {
      if (err) {
        throw err;
      } else {
        res.send(fila);
      }
    }
  );
});

//añadiremos un articulo a la base de datos
app.post("/api/articulos", (req, res) => {
  let data = {
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    stock: req.body.stock,
  };

  let sql = "INSERT INTO articulos SET ?";
  conexion.query(sql, data, (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
});

//editar articulo

app.put("/api/articulos/:id", (req, res) => {
  let id = req.params.id;
  let descripcion = req.body.descripcion;
  let precio = req.body.precio;
  let stock = req.body.stock;
  let sql =
    "UPDATE articulos SET descripcion = ?, precio = ?, stock = ? WHERE id = ?";

  conexion.query(sql, [descripcion, precio, stock, id], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
});

//eliminar articulo
app.delete("/api/articulos/:id", (req, res) => {
  conexion.query(
    "DELETE FROM articulos WHERE id = ?",
    [req.params.id],
    (error, filas) => {
      if (error) {
        throw error;
      } else {
        res.send(filas);
      }
    }
  );
});

//el primer parametro es el puerto, el segundo parametro es una f(x) que imprima una salida para verificar que el servidor se ejecuta, o capturar un error

//crearemos una variable para nuestro puerto
const puerto = 7000;

app.listen(puerto, () => {
  console.log("Servidor OK! en puerto: " + puerto);
});

//instalamos CORS para evitar problemas de cruce de cabeceras

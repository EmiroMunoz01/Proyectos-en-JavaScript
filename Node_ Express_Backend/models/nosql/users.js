const mongoose = require("mongoose");
const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      //le diremos a mongo que este es un tipo de dato que no se puede repetir
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,

    //registra la fecha de creacion y la fecha de actualizacion
  }
);

module.exports = mongoose.model("users", UserScheme)

//ya tenemos nuestor modelo declarado
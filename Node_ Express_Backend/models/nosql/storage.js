const mongoose = require("mongoose");
const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,

    //registra la fecha de creacion y la fecha de actualizacion
  }
);

module.exports = mongoose.model("storages", StorageScheme);

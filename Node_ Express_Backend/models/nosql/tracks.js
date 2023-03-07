const mongoose = require("mongoose");
const TracksSheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
    },
    nationality: {
        type: String,
    },duration:{
        start : {
            type: Number,
        },end:{
            type: Number,
        }
    },mediaId:{
        type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,

    //registra la fecha de creacion y la fecha de actualizacion
  }
);

module.exports = mongoose.model("users", TracksSheme);

//ya tenemos nuestor modelo declarado

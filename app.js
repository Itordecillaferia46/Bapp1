const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const multer = require("multer");
mongoose.Promise = global.Promise;

//create our app
const app = express();

//middleware
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json())

const palabraPath = require("./routes/Palabras")

//routes
app.use("/", palabraPath)

//Settings
app.set("port", process.env.PORT || 4000);

//start server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

//DB conection

mongoose
  .connect('mongodb+srv://mapa:QmVzoUIvSL04sIov@cluster0.xmy9g5h.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));

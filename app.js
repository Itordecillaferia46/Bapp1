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
/* app.use(express.json()) */

//routes
app.get("/", (req, res) => {
  res.send("my home page dey show sha");
});

//Settings
app.set("port", process.env.PORT || 4000);

//start server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

//DB conection
mongoose.connect(
  "mongodb+srv://IdanielF10:<password>@cluster0.xdnub.mongodb.net/?retryWrites=true&w=majority"
);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));

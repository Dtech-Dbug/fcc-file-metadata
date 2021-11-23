var express = require("express");
var cors = require("cors");
require("dotenv").config();
const multer = require("multer");
const mongoose = require("mongoose");
const upload = multer({ dest: "uploads/" });

// connect mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Database Connected"))
  .catch((err) => console.log(err.message));
var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});
// define schema
const fileDataSchema = new mongoose.Schema({
  name: String,
  type: String,
  size: Number,
});

const FileModel = mongoose.model("FileModel", fileDataSchema);

app.post(
  "/api/fileanalyse",
  upload.single("upfile"),
  async function (req, res) {
    console.log("hello...processing");
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any
    console.log(req.file);

    const { originalname, mimetype, size } = req.file;

    //  save the data in db
    let savedFileData = await new FileModel({
      name: originalname,
      type: mimetype,
      size,
    }).save();
    console.log("savingfile data....");

    res.json(savedFileData);
  }
);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});

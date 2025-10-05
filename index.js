const express = require("express");
const mongoose = require("mongoose");
const app = express();
const mongoURI =
  "mongodb+srv://devmilon923mongodbatlast:y9LFb076NwNdxATK@cluster0.wwyyh.mongodb.net/NEWDB";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
const PORT = 3000;

app.get("/", (req, res) => {
  return res.send({ message: "Hey i am from docker conatiner v5" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

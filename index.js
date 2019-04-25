const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const CatRoutes = require("./express/routes/cats");

mongoose.connect(
  "mongodb+srv://ACAmongoDB:password1234@roncluster-otskm.mongodb.net/test?retryWrites=true"
);

const port = process.env.PORT || 4001;
const app = express();

app.use(bodyParser.json());
app.use("/api/cats", CatRoutes);

app.get("/", (req, res) => res.send("CATS"));

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

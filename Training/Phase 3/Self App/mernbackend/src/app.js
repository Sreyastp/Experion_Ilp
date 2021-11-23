const express = require("express");
const app = express();
const path = require("path");
require("./db/conn");

const port = process.env.PORT || 3000;

//providing the path for html
const static_path = path.join(__dirname, "../public");
//telling the express to display that html
app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.send("Helllo.......");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

const express = require("express");

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// simple route
app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hello from Products Service" });
});

// set port, listen for requests
const PORT = process.env.PORT || 1020;
app.listen(PORT, () => {
  console.log("Server is running on port 1020 Products Service");
});

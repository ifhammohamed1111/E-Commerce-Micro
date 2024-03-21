const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hello from Products Service" });
});

app.listen(1020, () => {
  console.log("Server is running on port 1020 Products Service");
});

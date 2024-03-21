const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hello from Customer Service" });
});

app.listen(1030, () => {
  console.log("Server is running on port 1030 Customer Service");
});

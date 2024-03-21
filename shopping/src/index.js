const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hello from Shopping Service" });
});

app.listen(1040, () => {
  console.log("Server is running on port 1040 Shopping Service");
});

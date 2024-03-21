const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hello from Api Gate" });
});

app.listen(1010, () => {
  console.log("Server is running on port 1010 ApiGateway Service");
});

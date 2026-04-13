import express from "express";
import morgan from "morgan";
const app = express();

const port = 3000;

// app.use(morgan("common"));

app.use((req, res, next) => {
  console.log("Request URL :" + req.url);
  console.log("Request Method :" + req.method);
  console.log("Device :" + req.get("User-Agent"));
  console.log("IP Address:" + req.ip);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, res) => {
  if (req.query.name || req.query.age) {
    const name = req.query.name || "Nothing";
    const age = req.query.age || "0";
    res.send(`<h1>Contact Me! in name<p>${name}</p> in age<p>${age}</p></h1>`);
  }

  res.send("<h1>Contact Me! in name<p>Nothing</p></h1>");
});

app.get("/contact/:id", (req, res) => {
  const id = req.params.id;
  res.send(`<h1>Contact Me! in number<p>${id}</p></h1>`);
});

app.post("/contact", (req, res) => {
  res.send("<h1>Contact Me! in post</h1>");
});

app.put("/contact", (req, res) => {
  res.send("<h1>Contact Me! in put</h1>");
});

app.delete("/contact", (req, res) => {
  res.send("<h1>Contact Me! in delete</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import express from "express";

const app = express();

const port = 3000;

app.use(express.json());

let users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@mail.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@mail.com",
  },
  {
    id: 3,
    name: "Bob Smith",
    email: "bob@mail.com",
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

app.post("/users", (req, res) => {
  const user = req.body;
  users.push({
    id: users.length + 1,
    ...user,
  });
  res.status(201).json(user);
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  user.name = req.body.name;
  user.email = req.body.email;
  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  users = users.filter((user) => user.id !== parseInt(id));
  res.json(user);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World! In Project HTTP</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

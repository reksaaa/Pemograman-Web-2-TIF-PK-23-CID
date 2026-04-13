import pool from "../db.js";

async function createUser(req, res) {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2)",
      [username, password],
    );

    res.status(201).send("User added succesfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

async function getUsers(req, res) {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

async function getUser(req, res) {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      res.status(404).send("User not found");
    }
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

async function updateUser(req, res) {
  const id = parseInt(req.params.id);
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      "UPDATE users SET username = $1, password = $2 WHERE id = $3",
      [username, password, id],
    );

    res.status(200).send("User updated succesfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

async function deleteUser(req, res) {
  const id = parseInt(req.params.id);

  try {
    const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    res.status(200).send("User deleted succesfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

export default {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};

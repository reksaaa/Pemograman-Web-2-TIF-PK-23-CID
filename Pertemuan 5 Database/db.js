import pg from "pg";

const pool = new pg.Pool({
  user: "admin",
  host: "localhost",
  database: "postgres",
  password: "password",
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error connecting to the database:', err.stack);
  }
  console.log("Database connected successfully!");
  release();
});

export default pool;

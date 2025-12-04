import express, { Request, Response } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const app = express();
const port = 5000;

// Database connection
const pool = new Pool({
  connectionString: `${process.env.CONNECTION_STRING}`,
});

// parser
app.use(express.json());

// app.use(express.urlencoded());

// database table creation
const initDB = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(70) NOT NULL UNIQUE,
    age INT,
    phone VARCHAR(11),
    address TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
    )
    `);

  await pool.query(`
        CREATE TABLE IF NOT EXISTS todos(
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id) ON DELETE CASCADE,
        tittle VARCHAR(250),
        description TEXT,
        completed BOOLEAN DEFAULT false,
        due_date DATE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `);
};

initDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Developers!");
});

app.post("/api", (req: Request, res: Response) => {
  console.log(req.body);
  //   res.send("This is post method!");
  res.status(201).json({
    success: true,
    message: "API successfully run",
  });
});

app.listen(port, () => {
  console.log(`Server successfully running on port ${port}`);
});

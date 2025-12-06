import express, { NextFunction, Request, Response } from "express";
import createDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { todoRoutes } from "./modules/todo/todo.routes";
import { authRoutes } from "./modules/auth/auth.routes";

const app = express();

// body parser
app.use(express.json());

// database create
createDB();

// demo
app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello Developers!");
});

// user routes
app.use("/users", userRoutes);

// todo routes
app.use("/todos", todoRoutes);

// auth routes
app.use("/auth", authRoutes);

// wrong path
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Page Not Found!",
    path: req.path,
  });
});

export default app;

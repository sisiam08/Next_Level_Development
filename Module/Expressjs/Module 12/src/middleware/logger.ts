import express, { Request, Response, NextFunction } from "express";
import { defaults } from "pg";

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Method: ${req.method}, \nPath: ${req.path}`);
  next();
};

export default logger;

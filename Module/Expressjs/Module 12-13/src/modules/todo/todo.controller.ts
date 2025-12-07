import { Request, Response } from "express";
import { todoServices } from "./todo.service";

const createTodo = async (req: Request, res: Response) => {
  try {
    const data = await todoServices.createTodo(req.body);

    res.status(201).json({
      success: true,
      message: "Todo added!",
      data: data.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      details: err,
    });
  }
};

const getTodo = async (req: Request, res: Response) => {
  try {
    const data = await todoServices.getTodo();

    if (data.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "Data not found!",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Todos retrieve successfully",
        data: data.rows,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getSingleTodo = async (req: Request, res: Response) => {
  try {
    const data = await todoServices.getSingleTodo(req.params.id!);

    if (data.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "Data not found!",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Single todo retrieve successfully",
        data: data.rows,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const updateTodo = async (req: Request, res: Response) => {
  try {
    const data = await todoServices.updateTodo(req.body, req.params.id!);

    if (data.rowCount === 0) {
      res.status(400).json({
        success: false,
        message: "Data not found!",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data updated successfully!",
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const data = await todoServices.deleteTodo(req.params.id!);

    if (data.rowCount === 0) {
      res.status(400).json({
        success: false,
        message: "Data not found!",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data deleted successfully!",
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const todoControllers = {
  createTodo,
  getTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};

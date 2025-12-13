import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const data = await userServices.createUser(req.body);

    res.status(201).json({
      success: true,
      message: "Data inserted successfully",
      data: data.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const data = await userServices.getUser();

    res.status(200).json({
      success: true,
      message: "Data fetch successfully",
      data: data.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const data = await userServices.getSingleUser(req.params.id as string);

    if (data.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "Data not found!",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data fetch successfully",
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

const updateUser = async (req: Request, res: Response) => {
  try {
    const data = await userServices.updateUser(req.body, req.params.id!);

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

const deleteUser = async (req: Request, res: Response) => {
  try {
    const data = await userServices.deleteUser(req.params.id!);

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

export const userControllers = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};

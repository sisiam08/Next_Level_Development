import { Request, Response } from "express";
import { userServices } from "./user.service";

const getAllUser = async (req: Request, res: Response) => {
  try {
    const data = await userServices.getAllUser();

    if (data.length === 0) {
      res.status(404).json({
        success: false,
        message: "Users not found!",
        data: data,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Users retrieved successfully",
        data: data,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      errors: err,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const data = await userServices.updateUser(req.body, req.params.userId!);

    if (typeof data === "string") {
      res.status(400).json({
        succes: false,
        message: data,
      });
    } else {
      if (data.rowCount === 0) {
        res.status(404).json({
          success: false,
          message: "User not found",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "User updated successfully",
          data: data,
        });
      }
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      errors: err,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const data = await userServices.deleteUser(req.params.userId!);

    if (typeof data === "string") {
      res.status(400).json({
        succes: false,
        message: data,
      });
    } else {
      if (data.rowCount === 0) {
        res.status(404).json({
          success: false,
          message: "user not found!",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "User deleted successfully",
        });
      }
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      errors: err,
    });
  }
};

export const userControllers = {
  getAllUser,
  updateUser,
  deleteUser,
};

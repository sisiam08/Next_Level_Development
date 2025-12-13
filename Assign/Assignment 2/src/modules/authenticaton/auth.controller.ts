import { Request, Response } from "express";
import { authServices } from "./auth.service";

const registerUser = async (req: Request, res: Response) => {
  try {
    const data = await authServices.registerUser(req.body);

    if (typeof data === "string") {
      res.status(400).json({
        success: false,
        message: data,
      });
    } else {
      res.status(201).json({
        seccess: true,
        message: "User registered successfully",
        data: data,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const data = await authServices.loginUser(req.body);

    if (typeof data === "string") {
      res.status(400).json({
        success: false,
        message: data,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Login successful",
        data: data,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const authControllers = {
  registerUser,
  loginUser,
};

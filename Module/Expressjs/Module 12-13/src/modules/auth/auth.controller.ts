import { Request, Response } from "express";
import { authServices } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const data = await authServices.loginUser(email, password);

    res.status(200).json({
      success: true,
      message: "Loged in successfully!",
      data: data,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const authControllers = { loginUser };

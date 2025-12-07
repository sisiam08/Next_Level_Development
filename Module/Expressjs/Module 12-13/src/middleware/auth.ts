import { Request, Response, NextFunction, json } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

const auth = (...role: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;

      if (!token)
        return res.status(500).json({ message: "You are not eligible!" });

      const decode = jwt.verify(
        token,
        config.jwt_secret as string
      ) as JwtPayload;

      req.user = decode;

      console.log(decode);

      if (role.length && !role.includes(decode.role)) {
        return res.status(500).json({
          success: false,
          message: "unauthorized!!!",
        });
      }
      next();
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };
};

export default auth;

import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

const auth = (...role: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token)
        return res.status(401).json({
          success: false,
          message: "You are not elligible!",
        });

      const decode = jwt.verify(
        token,
        config.jwt_secret_key as string
      ) as JwtPayload;

      req.user = decode;
      // console.log(req.user);

      if (role.length && !role.includes(decode.role)) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized!",
        });
      }

      if (decode.role === "customer") {
        if (req.params.userId && decode.id != req.params.userId)
          return res.status(401).json({
            success: false,
            message: "Unauthorized!",
          });

        if (req.body?.customer_id && decode.id != req.body.customer_id)
          return res.status(401).json({
            success: false,
            message: "Unauthorized!",
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

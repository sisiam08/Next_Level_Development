import { Request, Response } from "express";
import { bookingServices } from "./booking.service";
import { JwtPayload } from "jsonwebtoken";

const bookVehicle = async (req: Request, res: Response) => {
  try {
    const data = await bookingServices.bookVehicle(req.body);

    if (typeof data === "string") {
      res.status(400).json({
        success: false,
        message: data,
      });
    } else {
      res.status(201).json({
        success: true,
        message: "Booking created successfully",
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

const getAllBooking = async (req: Request, res: Response) => {
  try {
    const data = await bookingServices.getAllBooking(req.user);

    if (typeof data === "string") {
      res.status(400).json({
        success: false,
        message: data,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Bookings retrieved successfully",
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

const updateBooking = async (req: Request, res: Response) => {
  try {
    const user: any = req.user;
    const updateInfo = req.body;

    if (user.role === "customer" && updateInfo.status === "returned") {
      res.status(400).json({
        success: false,
        message: "You can not return!",
      });
    }
    if (user.role === "admin" && updateInfo.status === "cancelled") {
      res.status(400).json({
        success: false,
        message: "You can not cancel!",
      });
    }

    const data = await bookingServices.updateBooking(
      req.user,
      req.body,
      req.params.bookingId!
    );

    if (typeof data === "string") {
      res.status(400).json({
        success: false,
        message: data,
      });
    } else {
      if (req.body.status === "cancelled") {
        res.status(200).json({
          success: true,
          message: "Booking cancelled successfully",
          data: data,
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Booking marked as returned. Vehicle is now available",
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

export const bookingControllers = {
  bookVehicle,
  getAllBooking,
  updateBooking,
};

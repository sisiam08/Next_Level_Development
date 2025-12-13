import { Request, Response } from "express";
import { vehicleServices } from "./vehicle.service";

const addNewVehicle = async (req: Request, res: Response) => {
  try {
    const data = await vehicleServices.addNewVehicle(req.body);

    if (typeof data === "string") {
      res.status(400).json({
        succes: false,
        message: data,
      });
    } else {
      res.status(201).json({
        success: true,
        message: "Vehicle created successfully",
        data: data.rows[0],
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

const getAllVehicle = async (req: Request, res: Response) => {
  try {
    const data = await vehicleServices.getAllVehicle();

    if (data.rowCount === 0)
      res.status(200).json({
        success: true,
        message: "No vehicles found",
        data: data.rows,
      });
    else {
      res.status(200).json({
        success: true,
        message: "Vehicles retrieved successfully",
        data: data.rows,
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

const getSpecificVehicle = async (req: Request, res: Response) => {
  try {
    const data = await vehicleServices.getSpecificVehicle(
      req.params.vehicleId!
    );

    if (data.rowCount === 0)
      res.status(200).json({
        success: true,
        message: "No vehicles found",
        data: data.rows,
      });
    else {
      res.status(200).json({
        success: true,
        message: "Vehicles retrieved successfully",
        data: data.rows[0],
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

const updateVehicle = async (req: Request, res: Response) => {
  try {
    const data = await vehicleServices.updateVehicle(
      req.body,
      req.params.vehicleId!
    );

    if (typeof data === "string") {
      res.status(400).json({
        succes: false,
        message: data,
      });
    } else {
      if (data.rowCount === 0) {
        res.status(404).json({
          success: false,
          message: "Vehicle not found!",
        });
      } else {
        res.status(201).json({
          success: true,
          message: "Vehicle updated successfully",
          data: data.rows[0],
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

const deleteVehicle = async (req: Request, res: Response) => {
  try {
    const data = await vehicleServices.deleteVehicle(req.params.vehicleId!);

    if (typeof data === "string") {
      res.status(400).json({
        succes: false,
        message: data,
      });
    } else {
      if (data.rowCount === 0) {
        res.status(404).json({
          success: false,
          message: "Vehicle not found!",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Vehicle deleted successfully",
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

export const vehicleControllers = {
  addNewVehicle,
  getAllVehicle,
  getSpecificVehicle,
  updateVehicle,
  deleteVehicle,
};

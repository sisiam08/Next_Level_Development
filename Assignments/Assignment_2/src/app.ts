import express, { Request, Response } from "express";
import createDB from "./config/db";
import { authRoutes } from "./modules/authenticaton/auth.routes";
import { vehicleRoutes } from "./modules/vehicle/vehicle.routes";
import { userRoutes } from "./modules/user/user.routes";
import { bookingRoutes } from "./modules/booking/booking.routes";

const app = express();

app.use(express.json());

createDB();

app.get("/", (req: Request, res: Response) => {
  res.send("This is a Vehicle Rental System!");
});

// authentication
app.use("/api/v1/auth", authRoutes);

// vehicles
app.use("/api/v1/vehicles", vehicleRoutes);

// users
app.use("/api/v1/users", userRoutes);

// bookings
app.use("/api/v1/bookings", bookingRoutes);

export default app;

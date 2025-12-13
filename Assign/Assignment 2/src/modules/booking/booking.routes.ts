import express from "express";
import { bookingControllers } from "./booking.controller";
import auth from "../../middleware/auth";

const router = express.Router();

router.post("/", auth("admin", "customer"), bookingControllers.bookVehicle);
router.get("/", auth("admin", "customer"), bookingControllers.getAllBooking);
router.put(
  "/:bookingId",
  auth("admin", "customer"),
  bookingControllers.updateBooking
);

export const bookingRoutes = router;

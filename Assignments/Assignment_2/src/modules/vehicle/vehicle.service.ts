import { pool } from "../../config/db";
import { isValidStatus } from "../../helpers/available_status";
import { isValidVehicle } from "../../helpers/vehicles_type";

const addNewVehicle = async (vehicleInfo: Record<string, any>) => {
  const {
    vehicle_name,
    type,
    registration_number,
    daily_rent_price,
    availability_status,
  } = vehicleInfo;

  if (!isValidVehicle(type)) return "Enter valid vehicle!";

  if (!isValidStatus(availability_status)) return "Enter valid status!";

  const data = await pool.query(
    `INSERT INTO vehicles(vehicle_name, type, registration_number, daily_rent_price, availability_status) VALUES($1, $2, $3, $4, $5) RETURNING *`,
    [
      vehicle_name,
      type,
      registration_number,
      daily_rent_price,
      availability_status,
    ]
  );

  return data;
};

const getAllVehicle = async () => {
  const data = await pool.query(`SELECT * FROM vehicles`);

  return data;
};

const getSpecificVehicle = async (id: string) => {
  const data = await pool.query(`SELECT * FROM vehicles WHERE id = $1`, [id]);

  return data;
};

const updateVehicle = async (
  updateVehicleInfo: Record<string, any>,
  id: string
) => {
  const {
    vehicle_name,
    type,
    registration_number,
    daily_rent_price,
    availability_status,
  } = updateVehicleInfo;

  if (type) {
    if (!isValidVehicle(type)) return "Enter valid vehicle!";
  }

  if (availability_status) {
    if (!isValidStatus(availability_status)) return "Enter valid status!";
  }

  const data = await pool.query(
    `UPDATE vehicles SET vehicle_name=COALESCE($1, vehicle_name), type=COALESCE($2, type), registration_number=COALESCE($3, registration_number), daily_rent_price=COALESCE($4, daily_rent_price), availability_status=COALESCE($5, availability_status) WHERE id = $6 RETURNING *`,
    [
      vehicle_name,
      type,
      registration_number,
      daily_rent_price,
      availability_status,
      id,
    ]
  );

  return data;
};

const deleteVehicle = async (id: string) => {
  const vehicleStatus = await pool.query(
    `SELECT status FROM bookings WHERE vehicle_id = $1`,
    [id]
  );

  if (vehicleStatus.rowCount !== 0) {
    const status = vehicleStatus.rows[0].status;

    if (status === "active")
      return "This vehicle already booked. You can not delete now!";
  }

  const data = await pool.query(`DELETE FROM vehicles WHERE id = $1`, [id]);

  return data;
};

export const vehicleServices = {
  addNewVehicle,
  getAllVehicle,
  getSpecificVehicle,
  updateVehicle,
  deleteVehicle,
};

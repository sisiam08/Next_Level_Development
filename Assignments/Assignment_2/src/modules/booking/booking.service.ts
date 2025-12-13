import { pool } from "../../config/db";

const customerInfo = async (id: number) => {
  const data = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);

  return data;
};

const vehicleInfo = async (id: number) => {
  const data = await pool.query(`SELECT * FROM vehicles WHERE id = $1`, [id]);

  return data;
};

const updateVehicleStatus = async (id: number, status: string) => {
  await pool.query(`UPDATE vehicles SET availability_status=$1 WHERE id = $2`, [
    status,
    id,
  ]);
};

const BookingDateEnd = async (id: number, endDate: string) => {
  if (new Date() > new Date(endDate)) {
    await pool.query(`UPDATE bookings SET status = $1 WHERE id = $2`, [
      "returned",
      id,
    ]);

    const vehicleID = (
      await pool.query(`SELECT vehicle_id FROM bookings WHERE id = $1`, [id])
    ).rows[0].vehicle_id;

    updateVehicleStatus(vehicleID, "available");
  }
};

const bookVehicle = async (bookingInfo: Record<string, any>) => {
  const { customer_id, vehicle_id, rent_start_date, rent_end_date } =
    bookingInfo;

  if ((await customerInfo(customer_id)).rowCount === 0)
    return "Customer invalid!";

  if ((await vehicleInfo(vehicle_id)).rowCount === 0) return "Vehicle invalid!";

  if ((await vehicleInfo(vehicle_id)).rows[0].availability_status === "booked")
    return "This vehicle is already booked!";

  const start = new Date(rent_start_date);
  const end = new Date(rent_end_date);

  if (end <= start) return "End date must be after start date!";

  const duration = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

  const vehicleData = (await vehicleInfo(vehicle_id)).rows[0];

  const total_price = duration * vehicleData.daily_rent_price;

  const bookingData = (
    await pool.query(
      `INSERT INTO bookings(customer_id, vehicle_id, rent_start_date, rent_end_date, total_price, status) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
      [
        customer_id,
        vehicle_id,
        rent_start_date,
        rent_end_date,
        total_price,
        "active",
      ]
    )
  ).rows[0];

  updateVehicleStatus(vehicle_id, "booked");

  const { vehicle_name, daily_rent_price } = vehicleData;
  const vehicle = { vehicle_name, daily_rent_price };

  const data = { ...bookingData, vehicle };

  return data;
};

const getAllBooking = async (user: any) => {
  const bookdData = await pool.query(`SELECT * FROM bookings`);
  if (bookdData.rowCount === 0) return "Bookings not found!";

  bookdData.rows.forEach((book) => {
    BookingDateEnd(book.id, book.rent_end_date);
  });

  const data = await pool.query(`SELECT * FROM bookings`);

  // admin
  if (user.role === "admin") {
    const result = data.rows.map(async (bookingInfo) => {
      const customerData = (await customerInfo(bookingInfo.customer_id))
        .rows[0];
      const { name, email } = customerData;
      const customer = { name, email };

      const vehicleData = (await vehicleInfo(bookingInfo.vehicle_id)).rows[0];
      const { vehicle_name, registration_number } = vehicleData;
      const vehicle = { vehicle_name, registration_number };

      return {
        ...bookingInfo,
        customer,
        vehicle,
      };
    });

    return Promise.all(result);
  }

  // customer
  const matchedCustomer = data.rows.filter(
    (customerBooking) => user.id === customerBooking.customer_id
  );

  const result = matchedCustomer.map(async (bookingInfo) => {
    const { customer_id, ...restBooking } = bookingInfo;

    const vehicleData = (await vehicleInfo(bookingInfo.vehicle_id)).rows[0];
    const { vehicle_name, registration_number, type } = vehicleData;
    const vehicle = { vehicle_name, registration_number, type };

    return {
      ...restBooking,
      vehicle,
    };
  });
  return Promise.all(result);
};

const updateBooking = async (
  user: any,
  updateStatus: Record<string, string>,
  id: string
) => {
  const book = await pool.query(
    `SELECT customer_id, rent_start_date FROM bookings WHERE id=$1`,
    [id]
  );

  if (user.role === "customer" && user.id != book.rows[0].customer_id)
    return "You can not update other customers bookings!";

  const today = new Date();
  const startDate = new Date(book.rows[0].rent_start_date);

  if (user.role === "customer" && today <= startDate)
    return "You can not cancel booking now!";

  const updateData = await pool.query(
    `UPDATE bookings SET status = $1 WHERE id= $2 RETURNING *`,
    [updateStatus.status, id]
  );

  // change status
  const vehicleId = updateData.rows[0].vehicle_id;

  updateVehicleStatus(vehicleId, "available");

  // admin
  if (user.role === "admin") {
    const vehicleData = (await vehicleInfo(vehicleId)).rows[0];
    const { availability_status } = vehicleData;
    const vehicle = { availability_status };

    const data = {
      ...updateData.rows[0],
      vehicle,
    };

    return data;
  }

  // customer
  return updateData.rows[0];
};

export const bookingServices = {
  bookVehicle,
  getAllBooking,
  updateBooking,
};

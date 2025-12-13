import { Pool } from "pg";
import config from "./index";

export const pool = new Pool({
  connectionString: `${config.connection_string}`,
});

const createDB = async () => {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(70) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        phone VARCHAR(11) NOT NULL,
        role VARCHAR(20) DEFAULT NULL
        )
        `);

  await pool.query(`CREATE TABLE IF NOT EXISTS vehicles(
    id SERIAL PRIMARY KEY,
    vehicle_name VARCHAR(50) NOT NULL,
    type VARCHAR(20) DEFAULT NULL,
    registration_number VARCHAR(50) NOT NULL UNIQUE,
    daily_rent_price INT NOT NULL,
    availability_status VARCHAR(20) DEFAULT 'available'
    )`);

  await pool.query(`CREATE TABLE IF NOT EXISTS bookings(
      id SERIAL PRIMARY KEY,
      customer_id INT REFERENCES users(id) ON DELETE CASCADE,
      vehicle_id INT REFERENCES vehicles(id) ON DELETE CASCADE,
      rent_start_date VARCHAR(30) NOT NULL,
      rent_end_date VARCHAR(30) NOT NULL,
      total_price INT NOT NULL,
      status VARCHAR(20) DEFAULT NULL
      )`);
};

export default createDB;

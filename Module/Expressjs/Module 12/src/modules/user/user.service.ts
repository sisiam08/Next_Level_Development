import { pool } from "../../config/db";
import bcrypt from "bcryptjs";

const createUser = async (usersInfo: Record<string, unknown>) => {
  const { name, role, email, password, age, phone, address } = usersInfo;

  const hashedPass = await bcrypt.hash(password as string, 15);

  const data = await pool.query(
    `INSERT INTO users(name, role, email, password, age, phone, address) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [name, role, email, hashedPass, age, phone, address]
  );

  return data;
};

const getUser = async () => {
  const data = await pool.query(`SELECT * FROM users`);

  return data;
};

const getSingleUser = async (id: string) => {
  const data = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);

  return data;
};

const updateUser = async (userInfo: Record<string, unknown>, id: string) => {
  const { name, email, age, phone } = userInfo;

  const data = await pool.query(
    `UPDATE users SET name=$1, email=$2, age=$3, phone=$4 WHERE id = $5`,
    [name, email, age, phone, id]
  );

  return data;
};

const deleteUser = async (id: string) => {
  const data = await pool.query(`DELETE FROM users WHERE id = $1`, [id]);

  return data;
};

export const userServices = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};

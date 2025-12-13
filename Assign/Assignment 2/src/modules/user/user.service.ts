import { pool } from "../../config/db";
import { isValidRole } from "../../helpers/userRole";
import bcrypt from "bcryptjs";

const getAllUser = async () => {
  const data = await pool.query(`SELECT * FROM users`);

  const users = data.rows.map(({ password, ...rest }) => {
    return rest;
  });

  return users;
};

const updateUser = async (updateUserInfo: Record<string, any>, id: string) => {
  let { name, email, password, phone, role } = updateUserInfo;

  if (password) {
    if (password.length < 6) return "Password must be minimum 6 characters!";

    const hashedPass = await bcrypt.hash(password, 15);

    password = hashedPass;
  }

  if (role && !isValidRole(role)) {
    return "Please enter valid role!";
  }

  const data = await pool.query(
    `UPDATE users SET name=COALESCE($1, name), email=COALESCE($2, email), password=COALESCE($3, password), phone=COALESCE($4, phone), role=COALESCE($5, role)  WHERE id = $6 RETURNING *`,
    [name, email, password, phone, role, id]
  );

  const { password: userPassword, ...rest } = data.rows[0];

  return rest;
};

const deleteUser = async (id: string) => {
  const userStatus = await pool.query(
    `SELECT status FROM bookings WHERE customer_id = $1`,
    [id]
  );

  if (userStatus.rowCount !== 0) {
    const status = userStatus.rows[0].status;

    if (status === "active")
      return "The user already booked a vehicle. You can not delete now!";
  }
  const data = await pool.query(`DELETE FROM users WHERE id = $1`, [id]);

  return data;
};

export const userServices = {
  getAllUser,
  updateUser,
  deleteUser,
};

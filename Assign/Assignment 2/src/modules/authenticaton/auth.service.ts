import { pool } from "../../config/db";
import bcrypt from "bcryptjs";
import { isValidRole } from "../../helpers/userRole";
import jwt from "jsonwebtoken";
import config from "../../config";

const registerUser = async (userInfo: Record<string, any>) => {
  const { name, email, password, phone, role } = userInfo;

  if (password.length < 6) return "Password must be minimum 6 characters!";

  if (!isValidRole(role)) return "Please enter valid role!";

  const hashedPass = await bcrypt.hash(password, 15);

  const data = await pool.query(
    `INSERT INTO users(name, email, password, phone, role) VALUES($1, $2, $3, $4, $5) RETURNING *`,
    [name, email.toLowerCase(), hashedPass, phone, role.toLowerCase()]
  );

  const { password: userPassword, ...rest } = data.rows[0];

  return rest;
};

const loginUser = async (userInfo: Record<string, any>) => {
  const { email, password } = userInfo;

  const data = await pool.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);

  if (data.rows.length === 0) return "User not found!";

  const userData = data.rows[0];

  const match = await bcrypt.compare(password, userData.password);

  if (!match) return "Wrong password!";

  const token = jwt.sign(
    {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      role: userData.role,
    },
    config.jwt_secret_key as string,
    { expiresIn: "5d" }
  );

  const { password: userPassword, ...rest } = userData;
  const user = { ...rest };

  return { token, user };
};

export const authServices = {
  registerUser,
  loginUser,
};

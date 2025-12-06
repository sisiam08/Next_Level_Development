import { pool } from "../../config/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../config";

const loginUser = async (email: string, password: string) => {
  const data = await pool.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);

  if (data.rows.length === 0) return null;

  const user = data.rows[0];

  const match = await bcrypt.compare(password, user.password);

  if (!match) return false;

  const token = jwt.sign(
    { name: user.name, email: user.email, role: user.role },
    config.jwt_secret as string,
    {
      expiresIn: "5d",
    }
  );

  return { token, user };
};

export const authServices = { loginUser };

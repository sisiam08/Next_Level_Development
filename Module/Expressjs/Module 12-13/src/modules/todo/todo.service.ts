import { pool } from "../../config/db";

const createTodo = async (todoInfo: Record<string, unknown>) => {
  const { user_id, tittle } = todoInfo;

  const data = await pool.query(
    `INSERT INTO todos(user_id, tittle) VALUES($1, $2) RETURNING *`,
    [user_id, tittle]
  );

  return data;
};

const getTodo = async () => {
  const data = pool.query(`SELECT * FROM todos`);

  return data;
};

const getSingleTodo = async (id: string) => {
  const data = pool.query(`SELECT * FROM todos WHERE id = $1`, [id]);

  return data;
};

const updateTodo = async (updateInfo: Record<string, unknown>, id: string) => {
  const { user_id, tittle, description, completed } = updateInfo;

  const data = pool.query(
    `UPDATE todos SET user_id = $1, tittle=$2, description =$3, completed=$4 WHERE id = $5`,
    [user_id, tittle, description, completed, id]
  );

  return data;
};

const deleteTodo = async (id: string) => {
  const data = pool.query(`DELETE FROM todos WHERE id = $1`, [id]);

  return data;
};

export const todoServices = {
  createTodo,
  getTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};

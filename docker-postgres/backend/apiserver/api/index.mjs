// backend/apiserver/api/index.mjs
import express from "express";
import { dbQuery } from "../db.mjs";

const api = express.Router();
api.get("/todos", async (req, res) => {
  try {
    const { rows } = await dbQuery({ text: "SELECT * FROM todos;" });
    res.json(rows);
  } catch (e) {
    res.status(500).send("API server internal error");
  }
});

api.post("/todos", async (req, res) => {
  try {
    const { rows } = await dbQuery({
      text: `INSERT INTO todos (text) VALUES ($1) RETURNING *;`,
      values: [req.body.text],
    });
    res.json(rows[0]);
  } catch (e) {
    res.status(500).send("API server internal error");
    console.log(e);
  }
});

api.put("/todos/:id", async (req, res) => {
  try {
    const todo = req.body;
    const { rows } = await dbQuery({
      text: `UPDATE todos SET text = $1, done = $2 WHERE id = $3 RETURNING *;`,
      values: [todo.text, todo.done, todo.id],
    });
    res.json(rows[0]);
  } catch (e) {
    res.status(500).send("API server internal error");
  }
});

api.delete("/todos", async (req, res) => {
  try {
    const { rows } = await dbQuery({
      text: `DELETE FROM todos WHERE done = true RETURNING *;`,
    });
    res.json(rows);
  } catch (e) {
    res.status(500).send("API server internal error");
  }
});

api.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await dbQuery({
      text: `DELETE FROM todos WHERE id = $1 RETURNING *`,
      values: [id],
    });
    res.json(rows[0]);
  } catch (e) {
    res.status(500).send("API server internal error");
  }
});

export default api;

// backend/apiserver/db.mjs
import pg from "pg";
const pool = new pg.Pool();
export const dbQuery = (query) => pool.query(query);
// backend/apiserver/index.mjs
import express from "express";
import cors from "cors";
import http from "http";
import api from "./api/index.mjs";

const PORT = 12345;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", api);

console.log(`PORT: ${PORT}`);

http.createServer(app).listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});


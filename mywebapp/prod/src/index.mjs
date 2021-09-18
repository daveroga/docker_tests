import express from "express";
import http from "http";
const PORT = 8080;
const HOST = "0.0.0.0";
const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Hello from Express Production!!</h1>");
});

http.createServer(app).listen(
  PORT, HOST, 
  () => console.log(`Running on http://${HOST}:${PORT}`)
);

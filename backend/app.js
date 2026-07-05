import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL_2024 || process.env.FRONTEND_URL_NEW || process.env.FRONTEND_URL,
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Events API" });
});

app.use("/api/v1/message", messageRouter);

dbConnection();

export default app;
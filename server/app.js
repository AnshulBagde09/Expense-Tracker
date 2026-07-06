import expenseRoutes from "./routes/expenseRoutes.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// Routes
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Expense Tracker API Running...",
  });
});

export default app;
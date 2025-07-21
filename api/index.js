import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "../routes/auth.route.js";
import productRoutes from "../routes/product.route.js";
import cartRoutes from "../routes/cart.route.js";
import couponRoutes from "../routes/coupon.route.js";
import paymentRoutes from "../routes/payment.route.js";
import analyticsRoutes from "../routes/analytics.route.js";
import { connectDB } from "../lib/db.js";
import cors from "cors";
dotenv.config();

const app = express();
const corsConfig = {
  origin: `${process.env.CLIENT_URL}`, credentials: true, methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]};
app.options("*", cors(corsConfig)); // Pre-flight request for all routes
app.use(cors(corsConfig));
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.get('/', (req, res) => {
  res.send("Server is running");
});
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

connectDB();

export default app;
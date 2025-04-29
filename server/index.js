import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import DBConnection from "./DBConnection.js";

// --------Routes------------
import authRoute from "./Routes/authRoutes.js";
import ProductRoute from "./Routes/ProductRoute.js";
import blogRoute from "./Routes/blogRoutes.js";
import CategoryRoute from "./Routes/categoryRoute.js"; //Product Category
import blogCatRoute from "./Routes/blogCatRoute.js";
import brandRoute from "./Routes/brandRoute.js";
import CouponRoute from "./Routes/couponRoute.js";
import enqRoute from "./Routes/enqRoutes.js";
import colorRoute from "./Routes/colorRoutes.js";
import OrderRoute from "./Routes/orderRoute.js";

import { notFound, errorHandler } from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Allow your frontend
    credentials: true, // Allow cookies and credentials
  })
);
DBConnection();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use("/api/user", authRoute);
app.use("/api/product", ProductRoute);
app.use("/api/blog", blogRoute);
app.use("/api/blogCat", blogCatRoute);
app.use("/api/brand", brandRoute);
app.use("/api/coupon", CouponRoute);
app.use("/api/color", colorRoute);
app.use("/api/order", OrderRoute);
app.use("/api/enq", enqRoute);

app.use("/api/category", CategoryRoute); //Product Category

// Serve static files
app.use("/images", express.static("images"));
app.use("/public", express.static("public"));

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});

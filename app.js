import express from "express";
import dotenv from "dotenv/config";
import dbConnect  from "./config/dbConnect.js";
import cookieParser from "cookie-parser";

dbConnect();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

import testRoute from "./routes/testRoute.js";
app.use("/api/test", testRoute);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import indexRouter from "./routes/indexRoutes.js"

const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.use("/api", indexRouter);

// Connect to MongoDB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri)

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

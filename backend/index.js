import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";
import PostRoute from "./routes/PostRoute.js";
import UploadRoute from "./routes/UploadRoute.js";

// Routes
const app = express();

// Serve images for public
app.use(express.static("public"));
app.use("/images", express.static("images"));

// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log("Listening on port number:", process.env.PORT)
    )
  )
  .catch((err) => console.log(err));

// Usage of routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/upload", UploadRoute);

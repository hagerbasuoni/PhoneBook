import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { info } from "./controllers/personcontroller.js";
import router from "./Routes/routes.js";
import mongoose from "mongoose";

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
console.log("Connecting to:", DB);
mongoose
  .connect(DB, { family: 4 })
  .then((c) => {
    console.log("Connected");
  })
  .catch((e) => {
    console.log("Connected failed", e);
  });
const app = express();
app.use(express.json());
app.use("/api/persons", router);
app.get("/info", info);
app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}...`);
});

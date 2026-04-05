import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { info } from "./controllers/personcontroller.js";
import router from "./Routes/routes.js";

const app = express();
app.use(express.json());
app.use("/api/persons", router);
app.get("/info", info);
app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}...`);
});

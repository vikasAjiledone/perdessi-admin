import Express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import CustomerRoutes from "./Routes/CustomerRoute.js";
import cors from "cors";
import config from "./config/Config.js";

//configure env
dotenv.config();

// databse config
config();

//rest object
const app = Express();

//middelwares
app.use(cors());
app.use(Express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/crm", CustomerRoutes);



//PORT
const PORT = process.env.PORT || 5000;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on mode on port ${PORT}`
  );
});
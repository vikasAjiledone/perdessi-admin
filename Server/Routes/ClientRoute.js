import Express from "express";
import { Addclientctrl, EditClintsctrl, MyClintsctrl } from "../Controllers/Clientctrl.js";

const app = Express();

const Route = Express.Router();

// Client Created 
Route.post("/addclient",Addclientctrl);

// My Client List
Route.get("/myclient/:id",MyClintsctrl);

// Edit Client List
Route.get("/myclient/:id",EditClintsctrl);

export default Route
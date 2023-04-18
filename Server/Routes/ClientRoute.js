import Express from "express";
import { Addclientctrl, EditClintsctrl, GetAllClintsctrl, MyClintsctrl } from "../Controllers/Clientctrl.js";

const app = Express();

const Route = Express.Router();

// Client Created 
Route.post("/addclient",Addclientctrl);

// Get All Client  
Route.get("/getallclient",GetAllClintsctrl);

// My Client List
Route.get("/myclient/:id",MyClintsctrl);

// Edit Client List
Route.get("/myclient/:id",EditClintsctrl);

export default Route
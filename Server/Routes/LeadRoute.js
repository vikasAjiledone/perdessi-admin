import Express from "express";
import { CreateLeadctrl, EditLeadsctrl, MyLeadsctrl } from "../Controllers/Leadctrl.js";

const app = Express();

const Route = Express.Router();

// Lead Created 
Route.post("/createlead",CreateLeadctrl);

// Get My Lead  
Route.get("/mylead/:id",MyLeadsctrl);

// Edit Client List
Route.get("/myclient/:id",EditLeadsctrl);

export default Route
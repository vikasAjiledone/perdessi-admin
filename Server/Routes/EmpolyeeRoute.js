import Express from "express";
import {  addemployee, employeelogin, getallemployee } from "../Controllers/Empolyeectrls.js";
import Tokencheck from "../Middleware/Tokencheck.js";

//rest object
const app = Express();

const route = Express.Router();

// get all employee route
route.get('/getallemployee', getallemployee);
// add employee
route.post('/addemployee',addemployee);
//  employee Login
route.post('/employeelogin',employeelogin);


// Export

export default route
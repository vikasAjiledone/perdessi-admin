import Express  from "express";
import cors from "cors";

// Express start

const app = Express();


// middelware

app.use(Express.json());
app.use(cors())
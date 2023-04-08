import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
        first_name:{
            type : String,
            required : true
        },
        last_name:{
            type : String,
            required : true
        },
        email:{
            type : String,
            required : true
        },
        number:{
            type : Number,
            required : true
        },
        password: {
          type: String,
          required: true,
        },
        role: {
          type: Boolean,
          default: false
        }
    }
)

export const employeeModel = mongoose.model("employee",employeeSchema,"employee");
import { employeeModel } from "../Models/CustomerModel.js"
import bcrypt from "bcrypt"
import JWT from "jsonwebtoken";

export const getallemployee = async(req,resp)=>{
try {
    const fetchdata = await employeeModel.find();
    resp.status(200).send( {
        success: true,
        message: 'Customer Fatched',
        fetchdata
    })
} catch (error) {
    resp.status(500).send( {
        success: false,
        message: 'Customer Data Not Fatched Yet',
        fetchdata
    })
}
}

export const addemployee = async(req,resp)=>{
    try {
        const already = await employeeModel.findOne({email: req.body.email})
        if (already) {
            resp.status(200).send( {
                success: false,
                message: 'Empolyee exist',
            })
        } else {
            // Hashing password
            let passw = req.body.password;
            const hashedPassword = await bcrypt.hash(passw, 10);
            req.body.password = hashedPassword;

            const Createdata = await employeeModel.create(req.body);
            resp.status(200).send( {
                success: true,
                message: 'Empolyee Created',
            })
        }
    } catch (error) {
        resp.status(500).send( {
            success: false,
            message: 'Empolyee Not Created Yet',
        })
    }
}

export const employeelogin = async(req,resp)=>{
    try {
        //  checking your exist or not
        const user = await employeeModel.findOne({email: req.body.email});
        if (!user) {
            return resp.status(200).send( {
                success: false,
                message: 'Email not exist',
            })
        }

        // password compare or not
        const compare = await bcrypt.compare(req.body.password,user.password)
        if (!compare) {
            return resp.status(200).send( {
                success: false,
                message: 'Incorrect password or email',
            })
        }

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        resp.status(200).send( {
            success: true,
            message: 'Login successfully',
            user : {
            name: user.first_name +" "+ user.last_name,
            email: user.email,
            phone: user.number,
            role: user.role,
            },
            token
        })
    } catch (error) {
        resp.status(500).send( {
            success: false,
            message: 'API is not Working',
        })
    }
}
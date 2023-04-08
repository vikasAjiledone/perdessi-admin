import React, { useEffect } from "react";
import "./App.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },[])

  //form handler
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("http://localhost:5000/api/v1/crm/employeelogin", values);
      console.log(res);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify( res.data.user));
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div className="flex justify-center bg">
      {/* <div > */}
        <Form
          layout="vertical"s
          onFinish={onfinishHandler}
          className="form-signin form h-96
          sm:h-96 sm:w-1/2  md:h-80 
          "
        >
          <h3 className="text-center text-3xl mt-6">LOG-IN</h3>

          <Form.Item className="m-4" label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item className="m-4" label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <button className="w-2/3 btn mt-3 bttn btn-primary" type="submit">
            Login
          </button>
        </Form>
      {/* </div> */}
    </div>
  );
};

export default Login;

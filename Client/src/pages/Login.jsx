import React from "react";
import "./App.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      // const res = await axios.post("http://localhost:5000/login", values);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div className="flex justify-center bg">
      <div className="container  form">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="form-signin"
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
      </div>
    </div>
  );
};

export default Login;

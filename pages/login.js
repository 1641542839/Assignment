import { Form, Input, Button, Radio, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { AES } from "crypto-js";                               
import Link from "next/link";
//import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import React from "react";
import { useRouter } from 'next/router'

export default function Home() {
   const router = useRouter();
  //  const onFinish = (values) => {
  //    router.push('dashboard');
  //  } 

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "10px",
      }}
    >
      <h1 style={{ width: "100%", textAlign: "center", margin: "20px 0" }}>
        Course Management Assistant
      </h1>
      <Form
        name="login"
        //className="login-form"
        /* initialValues={{
        remember: true,
      }}
      */
        onFinish={(values) => {
          console.log(values);
          //加密
          axios
            .post("https://cms.chtoma.com/api/login", {
              ...values,
              password: AES.encrypt(values.password, "cms").toString(),
            })
            .then((res) => {
              
              localStorage.setItem("cms", res.data.data);
              router.push('/dashboard/overview');

            })
            .catch((error) => {
              message.error(error.response.data.msg);
            });
        }}
        initialValues={{
          role: "student",
          email: "",
          password: "",
        }}
        style={{ width: "30%" }}
      >
        <Form.Item
          name="role"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group>
            <Radio.Button value="student">Student</Radio.Button>
            <Radio.Button value="teacher">Teacher</Radio.Button>
            <Radio.Button value="manager">Manager</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
            {
              type: "email",
              message: "Email format invalid",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
            {
              max: 16,
              min: 4,
              message: "password length is invalid",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            log in
          </Button>
          <div style={{ color: "red", marginTop: "10px" }}>
            Or <a href="">register now!</a>
          </div>
        </Form.Item>
        
      </Form>
    </div>
  );
}

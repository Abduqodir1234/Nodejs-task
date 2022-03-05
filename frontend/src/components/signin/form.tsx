import { Button, Form, Input, notification } from "antd"
import Title from "antd/lib/typography/Title";
import { SignInFormWrapper } from "./styles";
import { Typography } from 'antd';
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import openNotification from "../notification";
import { useMutation } from "react-query";
import SignInRequest from "../../Queryhooks/signin";
const { Text } = Typography;


interface SignInFormDatas{
    email:string;
    password:string
}


let SiginForm = () => {
    const navigate = useNavigate()

    // if sign in is successfull
    const onSuccess = (res:any) =>{
        if(res.data.error){
            openNotification("error",res.data.msg)
        }
        else if(!res.data.error){
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            localStorage.setItem('access_token',res.data.data.access_token)
            localStorage.setItem('refresh_token',res.data.data.refresh_token)
            openNotification("success","You Logged in Successfully")
            navigate("/")
        }
    }
    // if sign in is unsuccessfull
    const onError = () => {
        openNotification("error",'Password or email is incorrect')
    }

    //Mutation
    let {mutate,isLoading} = useMutation(SignInRequest,{onError,onSuccess})


    //Form Submit successfull
    const onFinish = (values:SignInFormDatas) => {
        mutate(values)
      };
    //Form Submit unsuccessfull
      const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
      };

      
    return(
        <SignInFormWrapper>
            <Title level={5}>Sign In</Title>
            <Form 
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout='vertical'
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                <Button loading={isLoading}  type="primary" htmlType="submit">
                    Send
                </Button>
                <br/>
                <Text >Don't have an account?</Text> <Link  to="/register" >
                    Register
                </Link>
                </Form.Item>
            </Form>
        </SignInFormWrapper>
    )
}

export default SiginForm
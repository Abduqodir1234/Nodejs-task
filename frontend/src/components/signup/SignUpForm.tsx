import { Button, Form, notification } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import SignUpRequest from "../../Queryhooks/signup";
import openNotification from "../notification";
import SignUpFormItems from "./formItems";
import {SignUpWrapper} from './style'

interface SignUpFormDatas{
    fullname:string;
    email:string;
    photo:any;
    password:string
}


let SignUpForm = () =>{
    const [photo, setphoto] = useState<any>();
    const navigate = useNavigate()

    const onChange = (file2:any) => {
        setphoto(file2[0])
    };


    //if sign up request success
    const onSuccess = (res:any) => {
        if(res.data.error){
            openNotification("error",res.data.msg)
        }
        else if(!res.data.error){
            openNotification("success","You registered Successfully")
            navigate('/signin')
        }
    }


    //if sign up request fails
    const onError = () =>{
        openNotification("error","Please fill all required fields correctly")
    } 

    let {mutate,isLoading} = useMutation(SignUpRequest,{onError,onSuccess})


    const onFinish = (values:SignUpFormDatas) => {
        let data = new FormData()
        data.append("email",values.email)
        data.append("password",values.password)
        photo && data.append("photo",photo)
        data.append('fullname',values.fullname)
        mutate(data)
      };
    
      const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
      };
    return(
        <SignUpWrapper>
            <Title level={5}>Sign Up</Title>
            <Form 
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout='vertical'
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <SignUpFormItems photo={photo} onChange={(e)=>onChange(e)}/>
                <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                    <Button loading={isLoading} type="primary" htmlType="submit">
                        Send
                    </Button>
                    <br/>
                    <Text >Have an account?</Text> <Link  to="/signin" >
                        Sign in
                    </Link>
                </Form.Item>
            
            </Form>
            </SignUpWrapper>
    )
}

export default SignUpForm;
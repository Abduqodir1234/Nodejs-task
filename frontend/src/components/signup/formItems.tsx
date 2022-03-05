import {Form, Input, Upload } from "antd"
import ImgCrop from "antd-img-crop";
import { FC, HTMLAttributes, HtmlHTMLAttributes, useRef } from "react";
import Avatar from "../Avatar";
import { SignUpWrapper, UnvisibleInputFile } from "./style"


interface SignUpFormItemsProps{
    onChange:(file:any)=>void;
    photo:any
}


let SignUpFormItems:FC<SignUpFormItemsProps> = ({onChange,photo}) =>{
    let Inputref = useRef<any>()
    const handleClick = () =>{
        Inputref.current.click()
    }
    return(
        <SignUpWrapper>

            <Form.Item label='Photo' >
                    <UnvisibleInputFile onChange={(e)=>onChange(e.target.files)} ref={Inputref} type='file' />
                    <Avatar photo={photo} handleClick={()=>handleClick()}/>
            </Form.Item>



            <Form.Item
                label="Fullname"
                name="fullname"
                hasFeedback
                rules={[{ required: true, message: 'Please input your fullname!' }]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                    label="Email"
                    name="email"
                    hasFeedback
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input type='email' />
            </Form.Item>


            <Form.Item
                label="Password"
                name="password"
                hasFeedback
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                }),
                ]}
            >
                <Input.Password />
            </Form.Item>


        </SignUpWrapper>
    )
}

export default SignUpFormItems
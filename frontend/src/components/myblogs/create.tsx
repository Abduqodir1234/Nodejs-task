import { Button, Form, notification } from "antd";
import Title from "antd/lib/typography/Title";
import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { useQuill } from "react-quilljs";
import { useNavigate } from "react-router-dom";
import createBlog from "../../Queryhooks/createBlog";
import PersonalBlogFormItems from "./formItems";

let BlogCreateForm = () => {
    const [photo,setphoto] = useState<any>()
    let navigate = useNavigate()

    //if request fails
    const onError = () =>{
        openNotification("error","Something went wrong")
    }

    //if request successfull
    const onSuccess = (res:any) =>{
        if(res.data.error){
            openNotification("error",res.data.msg)
        }else if(!res.data.error){
            openNotification("success","You created a blog successfully")
            navigate('/profile/blogs')
        }
    }

    let {mutate,isLoading} = useMutation(createBlog,{onError,onSuccess})

    //Quill configuration
    const { quill, quillRef, Quill } = useQuill({
        modules: { blotFormatter: {} }
    });


    //Photo change
    const handleMainPhotoChange = (e:any)=>{
        setphoto(e[0])
    }

    //Notification configuration
    const openNotification = (title:'success' | 'error',description:string) => {
        notification[title]({
          message: title,
          description:description,
        });
      };
    

    //Create a blog
    const onFinish = (values:any) => {
        let formdata = new FormData()
        formdata.append('title',values.title)
        formdata.append('short_desc',values.short_desc)
        formdata.append('photo',photo)
        formdata.append('description',quillRef.current.firstChild.innerHTML)
        mutate(formdata)
      };
    

    // if form is failed
    const onFinishFailed = (errorInfo:any) => {
    console.log('Failed:', errorInfo);
    };
    
    return(
        <>
            <Title level={3}>
                Create a blog
            </Title>
            <Form 
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout='vertical'
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <PersonalBlogFormItems handleMainPhotoChange={(e)=>handleMainPhotoChange(e)} quill={quill} Quill={Quill} quillRef={quillRef}   />
                <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                    <Button loading={isLoading} type="primary" htmlType="submit">
                        Send
                    </Button>
                    
                </Form.Item>
            </Form>
        </>
    )
}

export default BlogCreateForm;
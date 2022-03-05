import { Button, Form, notification } from "antd";
import Title from "antd/lib/typography/Title";
import { FC, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useQuill } from "react-quilljs";
import { useNavigate, useParams } from "react-router-dom";
import { configs } from "../../configs";
import updateBlog from "../../Queryhooks/updateBlog";
import openNotification from "../notification";
import PersonalBlogFormItems from "./formItems";


interface BlogItemFormProps{
    data2:any
}

let BlogItemForm:FC<BlogItemFormProps> = ({data2}) =>{
    let navigate = useNavigate()
    let {id} = useParams()
    let {data:{data}} = data2
    const [photo,setphoto] = useState<any>(configs.base_url + data.photo)


    //if update request successfull
    const onSuccess = (res:any) =>{
        if(res.data.error){
            openNotification('error',res.data.msg)
        }
        else if(!res.data.error){
            openNotification('success','Updated successfully')
            navigate('/profile/blogs')
        }
    }

    //if update request unsuccessfull

    const onError = () =>{
        openNotification('error','Something went wrong')
    }


    let {mutate,isLoading} = useMutation(updateBlog,{onError,onSuccess})



    const handleMainPhotoChange = (e:any)=>{
        setphoto(e[0])
    }
    const { quill, quillRef, Quill } = useQuill({
        modules: { blotFormatter: {} }
    });

    useEffect(()=>{
        if(quill){
            quill.clipboard.dangerouslyPasteHTML(data?.description)
        }
    },[quill])

    const onFinish = (values:any) => {
        values.description = quillRef.current.firstChild.innerHTML
        delete values.desc
        let formdata = new FormData()
        formdata.append('title',values.title)
        formdata.append('short_desc',values.short_desc)
        typeof photo !=='string' && formdata.append('photo',photo)
        formdata.append('description',quillRef.current.firstChild.innerHTML)
        mutate({data:formdata,id:id})
      };
    
      const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
      };
    
    return(
        <>
            <Title level={3}>
                Update a blog
            </Title>
            <Form 
                name="basic"
                initialValues={{
                    title:data.title,
                    short_desc:data.short_desc
                }}
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

export default BlogItemForm;
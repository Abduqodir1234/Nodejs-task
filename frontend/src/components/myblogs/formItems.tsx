import { Col, Form, Input, Row } from "antd"
import BlotFormatter from 'quill-blot-formatter';
import { FC, useEffect } from "react";
const { TextArea } = Input;


interface PersonalBlogFormItems{
    Quill:any;
    quill:any;
    quillRef:any,
    handleMainPhotoChange:(e:any)=>void
}


let PersonalBlogFormItems:FC<PersonalBlogFormItems> = ({quill,quillRef,Quill,handleMainPhotoChange}) =>{
   
    
      if (Quill && !quill) {
        // const BlotFormatter = require('quill-blot-formatter');
        Quill.register('modules/blotFormatter', BlotFormatter);
      }
    
      useEffect(() => {
        if (quill) {
          quill.on('text-change', (delta:any, oldContents:any) => {
            console.log('Text change!');
            console.log("Salom",quillRef.current.firstChild.innerHTML);
    
            let currrentContents = quill.getContents();
            console.log(currrentContents.diff(oldContents));
          });
        }
      }, [quill, Quill]);
    
    return(
        <Row>
          <Col xl={24} xs={24} className='px-3'>
              <Form.Item label='Photo'>
                <input type='file' onChange={(e)=>handleMainPhotoChange(e.target.files)}/>
                </Form.Item>
            </Col>
            <Col xl={24} xs={24} className='px-3'>
                <Form.Item
                    label="Title"
                    name="title"
                    hasFeedback
                    rules={[{ required: true, message: 'Please input title!' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item
                     label="Short Description"
                     name="short_desc"
                     rules={[{ required: true, message: 'Please input short description' }]}
                >
                
                <TextArea showCount maxLength={100} style={{ height: 120 }}  />
                </Form.Item>
            </Col>
            
            <Col span={24} >
                
                    <Form.Item
                         label="Description"
                         name="desc"
                         className="react-quill-container"
                    >
                        <div ref={quillRef} />
                    </Form.Item>
                
            </Col>
        </Row>
    )
}

export default PersonalBlogFormItems
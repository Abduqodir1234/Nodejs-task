import { Card, Avatar, Popconfirm } from 'antd';
import { EditOutlined,ArrowRightOutlined,DeleteOutlined} from '@ant-design/icons';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { configs } from '../../configs';

const { Meta } = Card;


interface BlogItemProps{
    id:number;
    img:string;
    title:string;
    desc:string;
    personal:boolean,
    handleDelete:(id:number)=>void

}


let BlogItem:FC<BlogItemProps> = ({img,title,desc,personal,id,handleDelete}) => {
    let navigate = useNavigate()
    return(
        <Card
            style={{width:'300px'}}
            cover={
            <img
                style={{width:"300px",height:'300px',objectFit:'cover'}}
                alt="example"
                src={configs.base_url +img}
            />
            }
            actions={personal ? [
                <Link to={`/profile/blogs/${id}`}><EditOutlined key="edit"  /></Link>,
                <Popconfirm placement="top" title={'Are you sure to delete this blog'} onConfirm={()=>handleDelete(id)} okText="Yes" cancelText="No">
                    <DeleteOutlined key='deleted' />
                </Popconfirm>,
                <Link to={`/blogs/${id}`}><ArrowRightOutlined key='more' /></Link>
                ]
                :
                [
                    <Link to={`/blogs/${id}`}>
                        <ArrowRightOutlined  key='more' />
                    </Link>
                ]
            }
        >
            <Meta
                title={title}
                description={<div style={{height:'50px',overflow:'hidden'}}>{desc}</div>}
            />
        </Card>
    )
}
export default BlogItem
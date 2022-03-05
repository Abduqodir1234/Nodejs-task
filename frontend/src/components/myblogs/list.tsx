import {Col, Empty, Pagination, Row } from "antd";
import { FC, useEffect, useState } from "react";
import { useMutation } from "react-query";
import deleteBlog from "../../Queryhooks/deleteBlog";
import BlogItem from "../blogs/item";
import { BlogContainer } from "../home/style";
import openNotification from "../notification";
import { EmptyContainer } from "./style";


const blogs = [
    {
        title:'Title',
        img:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        desc:'Description'
    },
    {
        title:'Title',
        img:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        desc:'Description'
    },
    {
        title:'Title',
        img:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        desc:'Description'
    },
    {
        title:'Title',
        img:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        desc:'Description'
    },
    {
        title:'Title',
        img:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        desc:'Description'
    },
    {
        title:'Title',
        img:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        desc:'Description'
    }
]


interface PersonalBlogsListProps{
    res:any,
    handlePageChange:(page:number,pageSize:number)=>void
}

let PersonalBlogsList:FC<PersonalBlogsListProps> = ({res,handlePageChange}) =>{
    
    const onSuccess = (data:any) =>{
        if(!data.data.error){
            openNotification('success','Deleted successfully')
            res.refetch()
        }
        else if(data.data.error){
            openNotification('error','Something went wrong.Try again!')
        }
    }
    const onError = () => {
        openNotification('error','Something went wrong.Try again!')
    }
    let {mutate,isLoading} = useMutation(deleteBlog,{onError,onSuccess})
    
    const handleDelete = (id:number) => {
        mutate(id)
    }
    return(
        <>
            <Row>
                {res.data.data.data.rows.length !==0 ? res.data.data.data.rows.map((one:any)=>(
                    <Col xs={24} xl={8} xxl={5} md={12} sm={24} lg={8} key={one.id} >
                    <BlogContainer>
                        <BlogItem
                         id={one.id}
                         desc={one.short_desc}
                         img={one.photo}
                         title={one.title}
                         personal={true}
                         handleDelete={(e)=>handleDelete(e)}
                        />
                    </BlogContainer>
                </Col>
                ))
                :
                (
                   <EmptyContainer>
                        <Empty className="empty"/>
                   </EmptyContainer>
                )}
                <Col span={24}>
                    <Pagination 
                        onChange={handlePageChange} 
                        defaultPageSize={res?.data?.data?.data?.limit} 
                        defaultCurrent={1} 
                        total={res?.data?.data?.data?.count} 
                    />
                </Col>
            </Row>
        </>
    )
}
export default PersonalBlogsList;
import { Col, Empty, Grid, Pagination, Row } from "antd";
import { useEffect, useState } from "react";
import useBlogs from "../../Queryhooks/useBlogs";
import BlogItem from "../blogs/item";
import Loading from "../Loading";
import { EmptyContainer } from "../myblogs/style";
import { BlogContainer } from "./style";


let BlogsList = () =>{
    let [blogPage,setpage] = useState(1)
    const res:any = useBlogs(blogPage)
    const handleDelete = (id:number) => {
        console.log(`Deleted item id is ${id}`)
    }
    const handlePageChange = (page:number,pageSize:any)=>{
        setpage(page)
    }
    useEffect(()=>res?.refetch(blogPage),[blogPage])

    if(res?.isError){
        return <div>{res?.error}</div>
    }
    else if(res?.data?.data?.error){
        return <div>{res?.data?.msg}</div>
    }
    else if(res?.data){
        return(
            <Row>
                {res?.data?.data.data.rows.length >=1 ? res?.data?.data.data.rows?.map((one:any,ind:any)=>(
                    <Col xs={24} xl={8} xxl={5} md={12} sm={24} lg={8} key={one?.id}>
                        <BlogContainer>
                            <BlogItem
                                img={one?.photo}
                                desc={one?.short_desc}
                                title={one?.title}
                                id={one?.id} 
                                personal={false}
                                handleDelete={(e)=>handleDelete(e)}
                            />
                        </BlogContainer>
                    </Col>
                )):
                (
                    <EmptyContainer>
                        <Empty/>
                    </EmptyContainer>
                )}
                <Col span={24} className='py-3'>
                    <Pagination 
                        onChange={handlePageChange} 
                        defaultPageSize={res?.data?.data?.data?.limit} 
                        defaultCurrent={1} 
                        total={res?.data?.data?.data?.count} 
                    />
                </Col>
            </Row>
        )
    }
    else{
        return <Loading />
    }
}

export default BlogsList;
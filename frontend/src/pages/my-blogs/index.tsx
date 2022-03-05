import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateButtonBlog from "../../components/create_blog_button";
import AppLayout from "../../components/layout";
import Loading from "../../components/Loading";
import PersonalBlogsList from "../../components/myblogs/list";
import usePersonalBlog from "../../Queryhooks/usePersonalBlogs";


let MyBlogs = () => {
    const [blogPage,setpage] = useState(1)
    const handlePageChange = (page:number,pageSize:any)=>{
        setpage(page)
    }
    
    let navigate = useNavigate()
    const onError = () =>{
        navigate('/404')
    }
    let res = usePersonalBlog(onError,blogPage)
    useEffect(()=>{res.refetch()},[blogPage])
    if(res?.data?.data){
        return(
            <AppLayout component={<CreateButtonBlog />} breadcrumb={[{url:'/',name:'Home'},{url:'/profile/blogs',name:'My Blogs'}]}>
                <PersonalBlogsList handlePageChange={(page:number,pageSize:number)=>handlePageChange(page,pageSize)} res={res} />
            </AppLayout>
        )
    }
    else{
        return <Loading />
    }
}
export default MyBlogs;
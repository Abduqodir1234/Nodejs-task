import { useNavigate, useParams } from "react-router-dom";
import AppLayout from "../../components/layout";
import Loading from "../../components/Loading";
import BlogItemForm from "../../components/myblogs/form";
import useBlogItem from "../../Queryhooks/useBlogItem";


const blogsInfo = {
    title:'Title',
    desc:'Description1 Description1 Description1 Description1 Description1 Description1 Description1 '
}


let MyBlogItem = () =>{
    let {id} = useParams()
    const navigate = useNavigate()
    const onError = () =>{
        navigate('/404')
    }
    let {data} = useBlogItem(id,onError)
    if(data?.data?.data){
        return(
            <AppLayout breadcrumb={[{url:'/',name:'Home'},{url:'/',name:"My blogs"},{url:'#',name:blogsInfo.title}]}>
                <BlogItemForm  data2={data}/>
            </AppLayout>
        )
    }
    else{
        return <Loading />
    }
}

export default MyBlogItem;
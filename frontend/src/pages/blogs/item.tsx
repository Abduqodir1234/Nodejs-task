import Title from "antd/lib/typography/Title";
import { useNavigate, useParams } from "react-router-dom";
import BlogBody from "../../components/blog/body";
import AppLayout from "../../components/layout";
import Loading from "../../components/Loading";
import useBlogItem from "../../Queryhooks/useBlogItem";




let Blog = () => {
    let {id} = useParams()
    let navigate = useNavigate()
    var onError = () => {
        navigate('/404')
    }
    let res:any= useBlogItem(id,onError)
    if(res?.data){
        return(
            <AppLayout breadcrumb={[{url:'/',name:'Home'},{url:'/',name:"Blogs"}]}>
               <BlogBody res={res.data.data} />     
            </AppLayout>
        )
    }
    else{
        return <Loading />
    }
}

export default Blog;
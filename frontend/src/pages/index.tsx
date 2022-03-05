import BlogsList from "../components/home/blogsList";
import AppLayout from "../components/layout";

let IndexPage = () =>{
    return (
        <AppLayout breadcrumb={[{url:'/',name:'Home'},{url:'#',name:" "}]}>
            <BlogsList />
        </AppLayout>
    )
}

export default IndexPage;
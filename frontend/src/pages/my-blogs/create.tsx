import AppLayout from "../../components/layout"
import BlogCreateForm from "../../components/myblogs/create"

let BlogCreate = () => {
    return(
        <AppLayout breadcrumb={[{url:'/',name:'Home'},{url:'/',name:"My blogs"},{url:'#',name:'Create'}]}>
            <BlogCreateForm />
        </AppLayout>
    )
    
}
export default BlogCreate;
import { Button } from "antd"
import { PlusCircleOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
let CreateButtonBlog = () => {
    return(
        <Link to='/profile/blogs/create'><Button type="dashed" icon={<PlusCircleOutlined/>} className="create_blog_button" >Create a blog</Button></Link>
    )
}
export default CreateButtonBlog;
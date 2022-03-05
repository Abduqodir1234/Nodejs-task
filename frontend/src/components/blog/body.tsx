import Title from "antd/lib/typography/Title"
import Text from "antd/lib/typography/Text"
import { useNavigate, useParams } from "react-router-dom"
import useBlogItem from "../../Queryhooks/useBlogItem"
import Loading from "../Loading"
import { FC } from "react"
import { Image } from "antd"
import { configs } from "../../configs"

interface BlogBodyProps {
    res:any
}

let BlogBody:FC<BlogBodyProps> = ({res}) =>{   
        let {title,photo,description} = res.data
        return(
            <>
            <Title level={3} className='text-align-center' >{title}</Title>
            <div className="justify-content-center">
                <Image src={configs.base_url + photo} className='object-fit-cover' /> 
            </div><br/>
            <Text><div className="whitespace-break image_style_blog_item" dangerouslySetInnerHTML={{__html: description}} ></div></Text>
            </>
        )
}
export default BlogBody;
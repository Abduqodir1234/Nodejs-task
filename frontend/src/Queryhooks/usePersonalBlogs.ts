import axios from "axios"
import { useQuery } from "react-query"







let usePersonalBlog = (onError:any,page:number) =>{
    let access_token = localStorage.getItem('access_token')
    let refresh_token = localStorage.getItem('refresh_token')
    const fetchPersonalBlogs = () => axios({
        method:'GET',
        url:`/blogs?page=${page}`,
        headers:{
            "Authorization":`Bearer ${access_token}`,
            "refresh":`${refresh_token}`
        }
    })
    return useQuery('fetch-personal-blogs',fetchPersonalBlogs,{onError})
}
export default usePersonalBlog;
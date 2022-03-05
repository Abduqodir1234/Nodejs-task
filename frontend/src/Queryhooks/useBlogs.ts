import axios from "axios"
import { useQuery } from "react-query"

let useBlogs = (page:number) =>{
    return useQuery('fetch-blogs-list',()=>axios.get(`/blogs/list?page=${page}`),{cacheTime:90*1000})
} 
export default useBlogs;
import axios from "axios"
import { useQuery } from "react-query"

let useBlogItem = (id:any,onError:any) =>{

    return useQuery('fetch-blogs-item',async()=>await axios.get(`/blogs/${id}`),{onError})
}
export default useBlogItem;
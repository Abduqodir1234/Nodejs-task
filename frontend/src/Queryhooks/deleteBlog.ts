import axios from "axios";
let access_token = localStorage.getItem('access_token')
let refresh_token = localStorage.getItem('refresh_token')
let deleteBlog =async (id:number)=>await axios({
    method:"DELETE",
    url:`/blogs/${id}`,
    headers:{
        "Authorization":`Bearer ${access_token}`,
        'refresh':`${refresh_token}`
    },
})
export default deleteBlog
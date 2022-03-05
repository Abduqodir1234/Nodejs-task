import axios from "axios"
let access_token = localStorage.getItem('access_token')
let refresh_token = localStorage.getItem('refresh_token')


let updateBlog = async (data:any) => await axios({
        method:'PATCH',
        url:`/blogs/${data.id}`,
        headers:{
            "Authorization":`Bearer ${access_token}`,
            'refresh':`${refresh_token}`
        },
        data:data.data
    })
export default updateBlog;
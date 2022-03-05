import axios from "axios"
let access_token = localStorage.getItem('access_token')
let refresh_token = localStorage.getItem('refresh_token')


let createBlog = async (data:any) => await axios({
        method:'POST',
        url:'/blogs',
        headers:{
            "Authorization":`Bearer ${access_token}`,
            'refresh':`${refresh_token}`
        },
        data:data
    })
export default createBlog;
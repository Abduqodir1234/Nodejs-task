import axios from "axios";
import { useQuery } from "react-query";




let useProfileData = (setloggedin:any) => {
    let access_token = localStorage.getItem('access_token')
    let refresh_token = localStorage.getItem("refresh_token")
    const onError = () =>{
        setloggedin()
    }
    const fetcher = () =>axios({
        method:"GET",
        url:'user/profile/info',
        headers:{
            "Authorization":`Bearer ${access_token}`,
            'refresh':`${refresh_token}`
        }
    })
    return useQuery('fetch-profile-info',fetcher,{onError,cacheTime:90*1000})
}
export default useProfileData;
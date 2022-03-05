import axios from "axios"

let SignUpRequest =async (data:any)=>await axios({
    method:"POST",
    url:`/user/register`,
    data:data
})
export default SignUpRequest
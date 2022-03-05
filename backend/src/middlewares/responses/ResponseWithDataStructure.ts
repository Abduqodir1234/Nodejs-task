let ResponseData = (data:any,status=200) =>{
    return {status,main:{error:false,data,}}
}
export default ResponseData;
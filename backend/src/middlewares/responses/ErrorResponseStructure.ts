let ErrorResponseStructure = (msg:string,status=400) =>{
    return {status,main:{error:true,msg,}}
}

export default ErrorResponseStructure
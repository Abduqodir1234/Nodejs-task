let SuccessResponseStructure = (msg:string,status=200) =>{
    return {status,main:{error:false,msg}}
}

export default SuccessResponseStructure
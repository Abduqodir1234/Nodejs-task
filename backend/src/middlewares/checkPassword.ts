import bcrypt from 'bcrypt'
let checkPassword = async(password:string,given:string) =>{
    try{
        let data = await bcrypt.compare(given,password)
        return {match:data}
    }
    catch(e:any){
        return {error:true,msg:e,match:false}
    }
}
export default checkPassword;
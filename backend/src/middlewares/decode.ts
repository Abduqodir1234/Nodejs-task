import jwt from "jsonwebtoken";
const token_secret = process.env.TOKEN_SECRET || ''

let Decode= async (token:string)=>{
    try{
       let decoded = await jwt.verify(token,token_secret);
       return {valid:true,expired:false,decoded};
    }
    catch(e:any){
        return{
            valid:false,
            expired:true,
            decoded:null
        }
    }
}
export default Decode;
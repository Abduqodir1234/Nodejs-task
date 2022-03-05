import { DataTypes } from "sequelize";
import { db } from "../config/db";
import bcyrpt from 'bcrypt'



export interface UserDocument{
    id:number;
    email:string;
    password:string;
    fullname:string;
    photo:string;
    checkPassword:(real_pass:string,pass:string)=>boolean
}


let Users = db.define('users',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    fullname:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false, 
    },
    photo:{
        type:DataTypes.STRING,
        allowNull:true
    },
    password:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    }
})





Users.beforeCreate(async(user:any,options:any)=>{
    const salt = await bcyrpt.genSalt(15)
    user.password = await bcyrpt.hash(user.password,salt)
})

export default Users;
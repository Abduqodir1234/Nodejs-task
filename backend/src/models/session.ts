import { DataTypes } from "sequelize";
import { db } from "src/config/db";
import Users, { UserDocument } from "./users";


export interface SessionDocument extends Document{
    id:number;
    userId:UserDocument["id"],
    valid:boolean,
    userAgent:string,
    createdAt:Date,
    updatedAt:Date,

}


let Session = db.define('session',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    valid:{
        type:DataTypes.BOOLEAN
    },
})


Users.hasMany(Session)

export default Session;
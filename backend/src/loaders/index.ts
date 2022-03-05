import express from 'express'
import connectDB, { db } from '../config/db'
import corsOpts from '../middlewares/cors'
import cors from 'cors'
import rootRouter from '../routes'
let StartApp = async (app:any) => {
    let PORT = process.env.PORT || 5000

    //Middlewares
    app.use('/src/public',express.static('src/public'))
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(cors(corsOpts))
    
    
    //Connect to db
    let {error,msg} = await connectDB()
    !error ? app.listen(PORT,console.log(msg,`\nListening in ${PORT}`)): console.log(msg)

    //Routes

    app.use('/api/v1/',rootRouter)

}
export default StartApp;
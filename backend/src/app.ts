import express from 'express'
import StartApp from './loaders'
import * as dotenv from 'dotenv';
dotenv.config();
let app = express()

StartApp(app)
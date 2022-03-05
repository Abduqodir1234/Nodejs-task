import express from 'express'
import StartApp from './loaders'

let app = express()

StartApp(app)
import express from 'express'
import router from './routes/routes.js'
import ErrorHandler from './utils.js/ErrorHandler.js'
import handelError from './middleware/error.js'


const app = express()

app.use(express.json())

//ALL ROUTERS
app.use(router)

app.use(handelError)



export default app
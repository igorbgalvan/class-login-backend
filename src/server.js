import express from 'express'
import 'dotenv/config'
import routes from './routes'
require('./database')

const app = express() 

app.use(express.json())
app.use(routes)

app.listen(process.env.APP_PORT, _ => {
  console.log('App is running on port ' + process.env.APP_PORT)
})
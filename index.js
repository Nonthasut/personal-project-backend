require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { urlencoded } = require('body-parser')
const db = require('./models')
const app = express()

app.use(cors())
app.use(express.json())
app.use(urlencoded({extended:false}))


db.sequelize.sync({force:true}).then(()=>
app.listen(process.env.PORT,()=>{
console.log('Server is running')
}))

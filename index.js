const db = require('./models')
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const expenditureRoutes = require('./routes/Expenditure')
const incomeRoutes = require('./routes/Income')
const targetRoutes = require('./routes/Target')
const userRoutes = require('./routes/User')

require('./config/passport/passport')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/expenditures', expenditureRoutes);
app.use('/incomes', incomeRoutes);
app.use('/targets', targetRoutes);
app.use('/users', userRoutes)


db.sequelize.sync({ force: false }).then(() =>
    app.listen(process.env.PORT, () => {
        console.log(`Server is running at ${process.env.PORT}`)
    }))

const express = require('express');
const path = require('path')
const fileUpload = require('express-fileupload');
const app = express()
const userRoute = require('./route/user.route')
const bodyParser = require('body-parser');
const { dbConnect } = require('./database/database')
const { notFound, errorHandler, uploadingError } = require('./middlewares/error handler')

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(fileUpload());





app.set('view engine', 'ejs');
app.use(express.static(`public`));


app.use('/api/user', userRoute)



app.use(uploadingError)
app.use(notFound)
app.use(errorHandler)


dbConnect()
app.listen(7500, console.log(`app is listening on port ${7500}`))
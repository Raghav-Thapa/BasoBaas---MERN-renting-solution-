const express = require ('express')
const app = express.Router()
const authCtrl = require('../controller/auth.controller')
const uploader = require('../middleware/uploader.middleware')

const uploadPath =(req,res,next) => {
    req.uploadPath ="./public/user"
    next()

}

app.post('/login', authCtrl.login)

app.post('/register',uploadPath,uploader.single('image'),authCtrl.register)
app.post('/activate/:token',)
app.post('/forget-password',)
app.post('/me',)

module.exports = app;
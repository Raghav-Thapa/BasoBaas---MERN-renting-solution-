const express = require('express')
const app = express.Router()

const authRoutes = require("./auth.routes")
const bannerRoutes = require("./banner.routes")
const cityRoutes = require("./city.routes")
const categoryRoutes = require("./category.routes")
const roomRoutes = require("./room.routes")
const userRoutes = require("./user.routes")

app.use("/auth",authRoutes);
app.use("/banner",bannerRoutes);
app.use("/city",cityRoutes);
app.use('/category',categoryRoutes)
app.use("/room",roomRoutes);
app.use('/user',userRoutes)


module.exports = app;
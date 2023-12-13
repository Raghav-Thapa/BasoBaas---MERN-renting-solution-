const express = require('express')
const app = express.Router()

const authRoutes = require("./auth.routes")
const bannerRoutes = require("./banner.routes")
const cityRoutes = require("./city.routes")
const categoryRoutes = require("./category.routes")
const roomRoutes = require("./room.routes")

app.use("/auth",authRoutes);
app.use("/banner",bannerRoutes);
app.use("/city",cityRoutes);
app.use('/category',categoryRoutes)
app.use("/room",roomRoutes);


module.exports = app;
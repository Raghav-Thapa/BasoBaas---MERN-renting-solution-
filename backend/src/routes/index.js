const express = require('express')
const app = express.Router()

const authRoutes = require("./auth.routes")
// const bannerRoutes = require("./banner.routes")

app.use("/auth",authRoutes);
// app.use("/banner",bannerRoutes);


module.exports = app;
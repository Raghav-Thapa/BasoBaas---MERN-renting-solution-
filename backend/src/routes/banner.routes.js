const app = require('express').Router()
const authCheck = require("../middleware/auth.middleware")


app.post("/", authCheck("value"))


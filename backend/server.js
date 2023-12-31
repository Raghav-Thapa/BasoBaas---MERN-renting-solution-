const http = require('http')
const express = require("express")
const app = express();
const cors = require("cors")
const routes = require('./src/routes');

const server = http.createServer(app);
require("./src/config/mongoose.config")

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

app.use("/api/v1", routes)

app.use("/assets/", express.static(process.cwd()+"/public/"));




app.use((error, req, res, next) => {
    let status = error && error.status ? error.status : 500;
    let msg = error && error.msg ? error.msg : "internal server error"
    console.log(error)

    res.status(status).json({
        result: null,
        status: false,
        msg: msg,
        meta: null

    })
})

server.listen(3005, 'localhost', (err) => {
    if (err) {
        console.log("Error listeninig to port")
    } else {
        console.log("Server is listening to port 3005")
        console.log("Press ctrl+c to disconnect server ")
    }
})
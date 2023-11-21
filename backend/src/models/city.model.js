const mongoose = require('mongoose')
const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    image:{
        type: String
    },
    slug: {
        type: String,
        require: true,
        unique: true
    },
        status:{
            type: String,
            ennum:['active','inactive'],
            default: 'inactive'
        }
},{
    timestamps:true,
    autoInced:true
})

const CityModel = mongoose.model("City", CitySchema)
module.exports = CityModel
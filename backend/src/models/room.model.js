const mongoose = require('mongoose')
const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    slug:{
        type: String,
        require: true,
        unique: true
    },
    categories:[{
        type: mongoose.Types.ObjectId,
        ref:"Category"
    }],
    detail:{
        type: String
    },
    price:{
        type: Number,
        require: null,
        min: 1 
    },
    // discount:{
    //     type: Number,
    //     min: 0,
    //     max: 99
    // },
    // afterDiscount:{
    //     type: Number,
    //     require: true,
    //     min: 1
    // },
    city:{
        type: mongoose.Types.ObjectId,
        ref:"City",
        default: null
    },
    attributes:[{
        key: String,
        value: [String]
    }],
    isfeatured:{
        type: Boolean,
        default: false
    },
        status:{
            type: String,
            ennum:['active','inactive'],
            default: 'inactive'
        },
        images: {
            type: Array,
          },
        ownerId:{
            type: mongoose.Types.ObjectId,
            default: null,
            ref: "User"
        }
},{
    timestamps:true,
    autoInced:true
})

const RoomModel = mongoose.model("Room", RoomSchema)
module.exports = RoomModel
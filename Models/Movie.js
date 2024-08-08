const mongoose= require("mongoose")

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    release_year:{
        type:Number,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    watched:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model("Movie",movieSchema)
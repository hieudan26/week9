const mongoose = require('mongoose');

const launchesSchema = mongoose.Schema({
    flightNumber : {
        type : Number,
        require : true
    },
    launchDate : {
        type : Date,
        require : true
    },
    mission : {
        type : String,
        require : true
    },
    rocket : {
        type : String,
        require : true
    },
    targe : {
        type : String,
        require : true
    },
    customers : [String],
    upcomming : {
        type : Boolean,
        require : true
    },
    success : {
        type : Boolean,
        require : true,
        default: true
    }
})

module.exports = mongoose.model('Launch', launchesSchema)
const mongoose = require('mongoose');

const News = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    pictureLink: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    date:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
    },
    shortInformation:{
        type:String,
        required:true,
    }



});

module.exports = mongoose.model('News', News);
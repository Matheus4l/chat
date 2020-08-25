const mongoose = require('mongoose')


const ChatSchema = new mongoose.Schema({

    name : String,
    message : String,
    created_at:{type:Date,default: Date.now}

})


module.exports = mongoose.model('chat', ChatSchema);
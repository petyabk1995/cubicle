const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: String, 
    imageUrl: String,
    imageUrl: String,

});

module.exports = mongoose.model('Accessory', accessorySchema);
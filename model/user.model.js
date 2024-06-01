const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model


const userSchema = new mongoose.Schema({
    memberId: {
        type: String,
        unique: true,
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'uploads.files'
    },
});

//Export the model
module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');
//Set up default mongoose connection
const dbConnect = () => {
    // mongoose.connect(process.env.mongoDB);
    mongoose.connect("mongodb+srv://cheeman:9Bcts_2015@atlascluster.untqfzs.mongodb.net/hello-dube?retryWrites=true&w=majority");
    console.log('database connect successfully')

}


module.exports = { dbConnect }
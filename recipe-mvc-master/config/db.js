
// import mongoose
const mongoose = require("mongoose");

// define the function to connect to the mongodb 

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongdb database connected successfully")
    } catch(error){
        console.log("failed to connect to the database")
    }

}

module.exports = connectDB
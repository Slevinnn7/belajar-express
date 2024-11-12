
const mongoose = require ("mongoose");
const connectDB = async() =>{
    try {
        await mongoose.connect(
            // "mongodb+srv://<db_username>:<db_password>@cluster0.7hcbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
            "mongodb://localhost:27017/tugasmdp"
        );
    console.log("Mongodb connected");
    }
    catch (error){
        console.error("mongodb connection error", error);
        process.exit(1);
    };
};
module.exports = connectDB;
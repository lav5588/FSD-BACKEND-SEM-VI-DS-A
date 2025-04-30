import mongoose from 'mongoose';
export default async function connectDb() {
    try{
        const connection =await mongoose.connect(`${process.env.MONGODB_URI}/fsd`);
        if(!connection){
            throw new Error("Failed to connect to MongoDB");
            process.exit(1); // Exit the process with failure
        }
        console.log("👍👍 Connected to MongoDB successfully 👍👍");
    }
    catch(err){
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit the process with failure
    }
}
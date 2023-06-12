import mongoose from "mongoose";

export const connectDB = () => {
    mongoose
    .connect(process.env.MONGO_URI, {
        dbname: "backendapi"
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((e) => console.log(e));
};
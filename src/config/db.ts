import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI not found");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

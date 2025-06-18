import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};


export const orders = [
    {
      transactionId: "#51325",
      date: "12.06.2024",
      status: "success",
      gameName: "Ernardd",
      gameId: "15125223623",
      amount: "$153.26",
    },
    {
      transactionId: "#51326",
      date: "13.06.2024",
      status: "success",
      gameName: "Ernardd",
      gameId: "15125223624",
      amount: "$89.99",
    },
    {
      transactionId: "#51327",
      date: "14.06.2024",
      status: "failed",
      gameName: "Ernardd",
      gameId: "15125223625",
      amount: "$120.00",
    },
    {
      transactionId: "#51328",
      date: "15.06.2024",
      status: "success",
      gameName: "Ernardd",
      gameId: "15125223626",
      amount: "$64.99",
    },
    {
      transactionId: "#51329",
      date: "14.06.2024",
      status: "failed",
      gameName: "Ernardd",
      gameId: "15125223625",
      amount: "$120.00",
    },
    {
      transactionId: "#51330",
      date: "15.06.2024",
      status: "success",
      gameName: "Ernardd",
      gameId: "15125223626",
      amount: "$64.99",
    }
]

export default connectDB;
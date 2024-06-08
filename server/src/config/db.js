import mongoose from "mongoose";

const db_url = "mongodb+srv://galarzahector56:JUGODEMANZANA20@cluster0.h7t0mqb.mongodb.net/taskAPI";

function connectDB() {
  const connectDB = mongoose.connect(db_url);
  if (connectDB) {
    console.log("Conexión exitosa con Mongo!");
  }
}
export default connectDB;

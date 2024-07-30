import { Schema, model } from "mongoose";

//schema
const plantSchema = new Schema({
    name: String,
    category: String,
    image: String,
    price: Number,
    description: String
})

//model
const Plant = model("Plant",plantSchema)

export default Plant
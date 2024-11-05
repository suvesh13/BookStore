import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name:String,
    title:String,
    print:Number,
    Categoy:String,
    image:String
})

const Book = mongoose.model("Book",bookSchema);
export default Book;
import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        NumPaginas: {type: Number}
    }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;
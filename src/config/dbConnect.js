import mongoose from "mongoose"

mongoose.connect("mongodb+srv://root:142536@crud-av2.ok1zh.mongodb.net/CRUD-AV2");

let db = mongoose.connection;

export default db;
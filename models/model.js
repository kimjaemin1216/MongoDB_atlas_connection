import mongoose from "mongoose";

const dataShema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number}
});

const Model = mongoose.model("tablename". dataShema, "tablename");
export default Model;
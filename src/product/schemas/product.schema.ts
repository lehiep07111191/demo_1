
import * as mongoose from "mongoose";
import uuid = require("uuid");

export const ProductSchema = new mongoose.Schema({
    // common field
    _id: {type: String},  
    id: {type: String, default: uuid.v4},
    createdDate: {type: Date, default: new Date()},
    updatedDate: {type: Date, default: new Date()},
    createdBy: {type: String},
    // private field
    name: {type: String},
    des: {type: String},
    color: {type: String},
    image: {type: String},
    size: {type: String},
})

ProductSchema.pre("save", function (next) {
    this._id = this.get("id");
    next();
});

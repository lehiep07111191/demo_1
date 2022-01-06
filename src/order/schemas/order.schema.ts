import * as mongoose from "mongoose";


const ProducOrderSchema = new mongoose.Schema({
    productId: {type: String},
    quantity: {type: Number},
})
export const  OrderSchema = new mongoose.Schema({
    _id: {type: String},
    id: {type: String},
    createdBy: {type: String},
    updatedBy: {type: String},
    createdDate: {type: Date, default: new Date()},
    updatedDate: {type: Date, default: new Date()},

    product: {type: [ProducOrderSchema]},
    user: {type: String},
}) 

OrderSchema.pre("save", function (next) {
    this._id = this.get("id");
    next();
});


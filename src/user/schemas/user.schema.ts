
import * as mongoose from 'mongoose';
import uuid = require("uuid");

export const UserSchema = new mongoose.Schema({
  _id: {type: String},  
  id: {type: String, default: uuid.v4},
  createdDate: {type: Date, default: new Date()},
  updatedDate: {type: Date, default: new Date()},

  name: {type: String},
  email: {type: String},
  password: {type: String},
  address: {type: String},
  date_of_birth: {type: Date},
  roles: {type: [String], default: ['normal_user']},
});

UserSchema.pre("save", function (next) {
    this._id = this.get("id");
    next();
});

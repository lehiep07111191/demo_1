import { Document } from 'mongoose';

export interface User extends Document {
    id:string;
    createdDate: Date;
    updatedDate: string;
    
    name: string;
    email: string;
    password: string;
    date_of_birth: string;
    address: string;
    roles: [string];
  }
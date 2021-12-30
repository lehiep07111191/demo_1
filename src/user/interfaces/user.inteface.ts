import { Document } from 'mongoose';

export interface User extends Document {
    name: string;
    email: string;
    password: string;
    date_of_birth: string;
    address: string;
    roles: [string];
  }
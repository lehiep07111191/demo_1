import { Document } from 'mongoose';


export interface Order extends Document {
    id: string;
    createdDate: Date;
    createdBy: string;
    updatedDate: string;
    
    user: string;
    product: any;
}
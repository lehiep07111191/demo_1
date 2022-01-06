import { Connection } from 'mongoose';
import { DatabaseEnum } from 'src/shareds/enum/database.enum';
import { ProductSchema } from '../schemas/product.schema';


export const productProviders = [
  {
    provide: 'PRODUCT_MODEL',
    useFactory: (connection: Connection) => connection.model('Product', ProductSchema),
    inject: [DatabaseEnum.DATABASE_CONNECTION],
  },
];
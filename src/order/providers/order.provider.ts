import { Connection } from 'mongoose';
import { DatabaseEnum } from 'src/shareds/enum/database.enum';
import { OrderSchema } from '../schemas/order.schema';


export const productProviders = [
  {
    provide: 'ORDER_MODEL',
    useFactory: (connection: Connection) => connection.model('Order', OrderSchema),
    inject: [DatabaseEnum.DATABASE_CONNECTION],
  },
];
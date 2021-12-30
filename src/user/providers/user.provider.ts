import { Connection } from 'mongoose';
import { DatabaseEnum } from 'src/shareds/enum/database.enum';
import { UserSchema } from '../schemas/user.schema';


export const userProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: [DatabaseEnum.DATABASE_CONNECTION],
  },
];
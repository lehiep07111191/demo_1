import * as mongoose from 'mongoose';
import { DatabaseEnum } from '../shareds/enum/database.enum';

export const databaseProviders = [
  {
    provide: DatabaseEnum.DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost:27017/nest'),
  },
];
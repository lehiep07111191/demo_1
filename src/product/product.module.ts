import { Module } from '@nestjs/common';
import { SessionSerializer } from 'src/auth/session.serializer';
import { DatabaseModule } from 'src/database/database.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { productProviders } from './providers/product.provider';
import { ProductRepository } from './repository/product.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, ...productProviders, SessionSerializer],
  exports: [
    ProductRepository
  ]
})
export class ProductModule {}

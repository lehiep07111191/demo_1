import { Body, Controller, Get, Post, Query, Req, Session, UseGuards, Response, Res  } from '@nestjs/common';
import { CurrentUser } from '../shareds/decorators/user.decorators';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(
        private readonly service: ProductService
    ) {}

    @UseGuards(AuthenticatedGuard)
    @Post('')
    async createProduct(@CurrentUser() user,@Body() dto: any) {
        return await this.service.createProduct(user,dto)
    }

    @UseGuards(AuthenticatedGuard)
    @Get('')
     async findAll(@Session() session: Record<string, any>, @Query() query: any) {
        return await this.service.findAllProduct(query)
    }
    
}

import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { ProductRepository } from './repository/product.repository';

@Injectable()
export class ProductService {
    constructor(
        private readonly repository: ProductRepository
    ) {}

    async createProduct(user: any, dto: CreateProductDto) {
        let model = {...dto}
        model['createdBy'] = user.id  
        return await this.repository.createProduct(model)
    }

    async findAllProduct(query) {
        let _query: any = {

        }
        let and = []
        if(query.q) {
            and.push({name: {$regex: query.q, $options: 'i' }})
        }
        
        if(query['page'] && query['pageSize']) {
            _query.isPaging = true
            _query.page = query.page
            _query.pageSize = query.pageSize
        }
        if(and.length) {
            _query.$and = and
        }
        return await this.repository.findAll(_query)
    }
}

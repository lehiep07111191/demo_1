import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Product } from "../intefaces/product.schema";

@Injectable()
export class ProductRepository {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
  ) {}

    
  async createProduct(dto: any) {
      return await this.productModel.create(dto)
  }

  async findAll(query): Promise<Product[]> {
    let page = parseInt(query.page)
    let pageSize = parseInt(query.pageSize)
    
    if(query.isPaging) {
      delete query.isPaging
      delete query.page
      delete query.pageSize
      return await this.productModel.find(query).limit(pageSize).skip((page-1) * pageSize).exec();
    } else {
      return await this.productModel.find(query).limit(page).exec();
    }
    
    
  }
  async findOne(query): Promise<Product> {
    return await this.productModel.findOne(query)
  }
}



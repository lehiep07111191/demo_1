import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Order } from "../iterfaces/order.interface";


@Injectable()
export class OrderRepository {
  constructor(
    @Inject('PRODUCT_MODEL')
    private orderModel: Model<Order>,
  ) {}

    
  async createProduct(dto: any) {
      return await this.orderModel.create(dto)
  }

  async findAll(query): Promise<Order[]> {
    let page = parseInt(query.page)
    let pageSize = parseInt(query.pageSize)
    
    if(query.isPaging) {
      delete query.isPaging
      delete query.page
      delete query.pageSize
      return await this.orderModel.find(query).limit(pageSize).skip((page-1) * pageSize).exec();
    } else {
      return await this.orderModel.find(query).limit(page).exec();
    }
    
    
  }
  async findOne(query): Promise<Order> {
    return await this.orderModel.findOne(query)
  }
}

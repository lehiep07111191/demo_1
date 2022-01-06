import { IsNotEmpty, IsString } from "class-validator";

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    des: string;

    @IsString()
    @IsNotEmpty()
    color: string;

    @IsString()
    image: string;

    @IsString()
    size: string;
}
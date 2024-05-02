import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) { }
  create(createProductDto: CreateProductDto) {
    return this.prisma.products.create({
      data: createProductDto
    })
  }

  findAll() {
    return this.prisma.products.findMany()
  }

  findAllByCateg(title: string) {
    return this.prisma.products.findMany({
      where: {
        Category: {
          name: title
        }
      }
    })
  }

  findOne(id: number) {
    console.log("helo");
    
    const pro = this.prisma.products.findUnique({ where: { id } });
    if (!pro) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
    return pro
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}

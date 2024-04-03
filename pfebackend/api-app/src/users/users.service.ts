import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.prisma.users.findMany();
  }

  async findOne(id: number) {
    return this.prisma.users.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.prisma.users.delete({
      where: { id },
    });
  }
}

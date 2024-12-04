import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateJatekDto } from './dto/create-jatek.dto';
import { UpdateJatekDto } from './dto/update-jatek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JatekService {
  constructor(public prisma: PrismaService) {}

  create(createJatekDto: CreateJatekDto) {
    return this.prisma.jatek.create({
      data : createJatekDto
    });
  }

  findAll() {
    return this.prisma.jatek.findMany();
  }

  async findOne(id: number) {
    try{
      return await this.prisma.jatek.findUniqueOrThrow({
        where : {id}
      });
    }
    catch (error) {
      throw new HttpException(
        `Játék with ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      ); 
    }
  }

    async update(id: number, updateJatekDto: UpdateJatekDto) {
    try{
      await this.prisma.jatek.findUniqueOrThrow({
        where : {id}
      });
      return this.prisma.jatek.update({
        where: {id},
        data : updateJatekDto
      });
    }
    catch (error) {
      throw new HttpException(
        `Játék with ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      ); 
    }

  }

  async remove(id: number) {
    try{
      await this.prisma.jatek.findUniqueOrThrow({
        where : {id}
      });
      return this.prisma.jatek.delete({
        where: {id}
      });
    }
    catch (error) {
      throw new HttpException(
        `Játék with ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      ); 
    }
  }
}

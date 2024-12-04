import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GyerekService {
  constructor(public prisma: PrismaService) {}

  async create(createGyerekDto: CreateGyerekDto) {
    return this.prisma.gyerek.create({
      data : createGyerekDto
    })
  }

  findAll() {
    return this.prisma.gyerek.findMany();
  }

  async findOne(id: number) {
    try{
      return await this.prisma.gyerek.findUniqueOrThrow({
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

  async update(id: number, updateGyerekDto: UpdateGyerekDto) {
    try{
      await this.prisma.gyerek.findUniqueOrThrow({
        where : {id}
      });
      return this.prisma.gyerek.update({
        where: {id},
        data : updateGyerekDto
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
      await this.prisma.gyerek.findUniqueOrThrow({
        where : {id}
      });
      return this.prisma.gyerek.delete({
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
  addtoy(id:number, toyId:number){
    return this.prisma.kot.create({
      data: {
        gyerekId: id,
        jatekId : toyId
      }
    })
  }
  removetoy(childId:number, toyId:number){
    try{
      this.prisma.kot.findUniqueOrThrow({
        where : {
          gyerekId_jatekId:{
            gyerekId : childId,
            jatekId : toyId
          }
        }
      });
      return this.prisma.kot.delete({
        where : {
          gyerekId_jatekId:{
            gyerekId : childId,
            jatekId : toyId
          }
        }
      });
    }
    catch(error){
      throw new HttpException(
        `Ez a kötés nem található`,
        HttpStatus.NOT_FOUND,
      ); 
    }
  }
}

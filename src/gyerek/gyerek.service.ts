import { Injectable } from '@nestjs/common';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GyerekService {
  constructor(public prisma: PrismaService) {}

  async create(createGyerekDto: CreateGyerekDto) {
    return this.prisma.gyerek.create({
      data : {
        nev : createGyerekDto.nev,
        cim: createGyerekDto.cim,
        milyen: createGyerekDto.milyen,
        jatek: {
          connect: createGyerekDto.jatekok?.map((id) => ({
            id,
          })),
        }
      }
    })
  }

  findAll() {
    return this.prisma.gyerek.findMany();
  }

  findOne(id: number) {
    return this.prisma.gyerek.findFirst({
      where: {id}
    });
  }

  update(id: number, updateGyerekDto: UpdateGyerekDto) {
    return this.prisma.gyerek.update({
      where: {id},
      data: updateGyerekDto
    });
  }

  remove(id: number) {
    return this.prisma.gyerek.delete({
      where: {id}
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateJatekDto } from './dto/create-jatek.dto';
import { UpdateJatekDto } from './dto/update-jatek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JatekService {
  constructor(public prisma: PrismaService) {}

  create(createJatekDto: CreateJatekDto) {
    return this.prisma.jatek.create({
      data : {
        megnevezes : createJatekDto.megnevezes,
        cim: createGyerekDto.cim,
        milyen: createGyerekDto.milyen,
        jatek: {
          connect: createGyerekDto.jatekok?.map((id) => ({
            id,
          })),
        }
      }
    });
  }

  findAll() {
    return `This action returns all jatek`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jatek`;
  }

  update(id: number, updateJatekDto: UpdateJatekDto) {
    return `This action updates a #${id} jatek`;
  }

  remove(id: number) {
    return `This action removes a #${id} jatek`;
  }
}

import {IsBoolean,IsString } from "class-validator"

export class CreateGyerekDto {
    @IsString({message: 'A névnek string-nek kell lennie'})
    nev: string;
  
    @IsString({message: 'A címnek string-nek kell lennie'})
    cim: string;
  
    @IsBoolean({message: 'A milyen-nek boolean típusúnak kell lennie'})
    milyen: boolean;
}

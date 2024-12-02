import { Type } from "class-transformer"
import { IsArray, IsBoolean, IsInt, IsOptional, IsString } from "class-validator"

export class CreateGyerekDto {
    @IsString()
    nev: string;
  
    @IsString()
    cim: string;
  
    @IsBoolean()
    milyen: boolean;
  
    @IsArray()
    @IsOptional() // Ha nem kötelező játékokat hozzárendelni
    @IsInt({ each: true })  // A jatekok egy tömbnyi integer (id) érték
    jatekok?: number[]; 
}

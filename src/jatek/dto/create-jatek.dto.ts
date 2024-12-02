import { IsArray, IsIn, IsInt, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateJatekDto {

    @IsString()
    megnevezes : String

    @IsString()
    @IsIn(['Wood', 'Metal', 'Plastic', 'Other'])
    anyag : String

    @IsNumber()
    suly : Number

    @IsArray()
    @IsOptional() // Ha nem kötelező játékokat hozzárendelni
    @IsInt({ each: true })  // A jatekok egy tömbnyi integer (id) érték
    gyerekek?: number[]; 
}

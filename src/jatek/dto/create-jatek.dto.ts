import {IsIn, IsInt,IsString, Min } from "class-validator"

export class CreateJatekDto {

    @IsString({message: 'A megnevezésnek string-nek kell lennie'})
    megnevezes : string

    @IsString({message: 'Az anyagnak string-nek kell lennie'})
    @IsIn(['wood', 'metal', 'plastic', 'other'],{message:'Az anyagnak vagy: wood, metal, plastic, other-nek kell lennie'})
    anyag : string

    @IsInt({message: 'A súlynak int-nek kell lennie'})
    @Min(0,{message:'A súlynak minimum 0-nak kell lennie'})
    suly : number
}

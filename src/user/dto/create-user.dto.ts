import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example : 'string' , description : 'name' })
    name : string;
    @ApiProperty({example : 'string' , description : 'family' })
    family : string;  
    @ApiProperty({example : 'string' , description : 'age' })
    age? : number;
    @ApiProperty({example : 'string' , description : 'phone' })
    phone? : string;
}

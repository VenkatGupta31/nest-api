import { IsEmail, IsEnum, IsNotEmpty, IsString, isNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["Intern" , 'Engineer' , 'Admin'], {
        message: 'Valid role required'
    })
    role: 'Intern' | 'Engineer' | 'Admin';
}
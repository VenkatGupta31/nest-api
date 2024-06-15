import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
@Controller('users')
export class UsersController {
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */


    constructor(private readonly userService: UsersService ){

    }

    @Get() //GET /users or /users?role=value&age>25
    findAll(@Query('role') role?: 'Intern' | 'Engineer' | 'Admin'){
        return this.userService.findAll(role)
    }

    @Get(':id')  //GET /users/:id
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.userService.findOne(id)
    }

    @Post() //POST /users
    createUsers(@Body(ValidationPipe) createUserDto: CreateUserDto){
        return this.userService.create(createUserDto)
    }

    @Patch(':id')  //PATCH /users/:id
    updateUser(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto){
        return this.userService.update(id, updateUserDto)
    }

    @Delete(':id')  //DELETE /users/:id
    deleteOne(@Param('id', ParseIntPipe) id: number){
        return this.userService.delete(id)
    }

}

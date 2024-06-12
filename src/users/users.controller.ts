import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
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
    findOne(@Param('id') id: string){
        return this.userService.findOne(+id)
    }

    @Post() //POST /users
    createUsers(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }){
        return this.userService.create(user)
    }

    @Patch(':id')  //PATCH /users/:id
    updateUser(@Param('id') id: string, @Body() userUpdate: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }){
        return this.userService.update(+id, userUpdate)
    }


    @Delete(':id')  //DELETE /users/:id
    deleteOne(@Param('id') id: String){
        return this.userService.delete(+id)
    }

}

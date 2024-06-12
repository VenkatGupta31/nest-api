import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

    @Get() //GET /users or /users?role=value&age>25
    findAll(@Query('role') role?: 'Intern' | 'Engineer' | 'Admin'){
        return [role]
    }

    @Get(':id')  //GET /users/:id
    findOne(@Param('id') id: String){
        return { id }
    }

    @Post() //POST /users
    createUsers(@Body() user: {}){
        return user
    }

    @Patch(':id')  //PATCH /users/:id
    updateUser(@Param('id') id: string, @Body() userUpdate: {}){
        return { id, ...userUpdate }
    }


    @Delete(':id')  //DELETE /users/:id
    deleteOne(@Param('id') id: String){
        return { id, 'deleted': true }
    }

}

import {
  Param,
  Body,
  Get,
  Post,
  Delete,
  Patch,
  JsonController,
} from "routing-controllers";

import { CreateUserDto, UpdateUserDto } from "./dto/UserDto";

import { AppDataSource } from "../db/app-data-source";

import { User } from "../entity/user.entity";

@JsonController()
export class UserController {
  @Get("/")
  getAuthor() {
    return { author: "Anton Shkreba" };
  }

  @Get("/users")
  getAll() {
    const userRepository = AppDataSource.getRepository(User);

    const users = userRepository.find();

    return users;
  }

  @Post("/users")
  createUser(@Body() userDto: CreateUserDto) {
    const userRepository = AppDataSource.getRepository(User);

    const user = userRepository.create(userDto);

    userRepository.save(user);

    return user;
  }

  @Patch("/users/:id")
  updateUser(@Param("id") id: number, @Body() userDto: UpdateUserDto) {
    const userRepository = AppDataSource.getRepository(User);

    const users = userRepository.update(id, userDto);

    return users;
  }

  @Delete("/users/:id")
  removeUser(@Param("id") id: number) {
    const userRepository = AppDataSource.getRepository(User);

    userRepository.delete(id);

    return { message: "User  deleted" };
  }
}

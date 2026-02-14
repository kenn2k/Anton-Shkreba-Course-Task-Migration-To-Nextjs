import "reflect-metadata";
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

import path from "path";
import { readFile, writeFile } from "fs/promises";

const filePath = path.join(__dirname, "../../userRepository.json");

@JsonController()
export class UserController {
  @Get("/")
  getAuthor() {
    return { author: "Anton Shkreba" };
  }

  @Get("/users")
  async getAll() {
    const data = await readFile(filePath, "utf-8");

    if (!data) {
      return [];
    }
    const users = JSON.parse(data);
    return users;
  }

  @Post("/users")
  async createUser(@Body() userDto: CreateUserDto) {
    let users = [];

    const data = await readFile(filePath, "utf-8");

    users = data ? JSON.parse(data) : [];

    const newUser = {
      id: Math.random(),
      ...userDto,
    };

    users.push(newUser);

    await writeFile(filePath, JSON.stringify(users, null, 2), "utf-8");

    return newUser;
  }

  @Patch("/users/:id")
  async updateUser(@Param("id") id: number, @Body() userDto: UpdateUserDto) {
    const userId = Number(id);

    const data = await readFile(filePath, "utf-8");

    const users = data ? JSON.parse(data) : [];

    const usersIndex = users.findIndex(
      (item: { id: number }) => item.id === userId
    );

    if (usersIndex === -1) {
      throw new Error("User not found");
    }

    const updatedUser = {
      ...users[usersIndex],
      ...userDto,
      id: userId,
    };

    users[usersIndex] = updatedUser;

    await writeFile(filePath, JSON.stringify(users, null, 2), "utf-8");

    return updatedUser;
  }

  @Delete("/users/:id")
  async removeUser(@Param("id") id: number) {
    const userId = Number(id);

    const data = await readFile(filePath, "utf-8");

    const users = data ? JSON.parse(data) : [];

    const filtered = users.filter((item: { id: number }) => item.id !== userId);

    await writeFile(filePath, JSON.stringify(filtered, null, 2), "utf-8");

    return { deletedId: userId };
  }
}

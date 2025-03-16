import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient()

//we need to create the mock of this so that when the tests are run it doesnt add data into the database, it must return an empty funciton while mocking out the database calls
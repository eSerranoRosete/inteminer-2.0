"use server";

import { getUsersCollection } from "./getUsersCollection";
import { User, UserDocument } from "./UserTypes";

export const getUsers = async () => {
  const collection = await getUsersCollection();

  const users = (await collection.find({}).toArray()) as UserDocument[];

  const data: User[] = users.map((user) => ({
    id: user._id.toHexString(),
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    isActive: user.isActive,
    createdAt: user.createdAt,
  }));

  return data;
};

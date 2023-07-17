"use server";

import { revalidatePath } from "next/cache";
import { User } from "./UserTypes";
import { getUsersCollection } from "./getUsersCollection";

export const addUser = async (user: Omit<User, "id" | "createdAt">) => {
  const collection = await getUsersCollection();

  const userDoc: Omit<User, "id"> = {
    ...user,
    createdAt: new Date(),
  };

  const newUser = await collection.insertOne(userDoc);

  revalidatePath("/*");

  return newUser;
};

"use server";

import { revalidatePath } from "next/cache";
import { getUsersCollection } from "./getUsersCollection";
import { ObjectId } from "mongodb";

export const deleteUser = async (userID: string) => {
  const collection = await getUsersCollection();

  const removedUser = await collection.deleteOne({ _id: new ObjectId(userID) });

  revalidatePath("/*");

  return removedUser;
};

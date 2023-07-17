"use server";

import { revalidatePath } from "next/cache";
import { User } from "./UserTypes";
import { getUsersCollection } from "./getUsersCollection";
import { ObjectId } from "mongodb";

type UpdateUserProps = {
  _id: string;
  user: Partial<User>;
};

export const updateUser = async ({ user, _id }: UpdateUserProps) => {
  const collection = await getUsersCollection();

  const updatedUser = await collection.updateOne(
    { _id: new ObjectId(_id) },
    {
      $set: {
        updatedAt: new Date(),
        ...user,
      },
    }
  );
  revalidatePath("/team");
  return updatedUser;
};

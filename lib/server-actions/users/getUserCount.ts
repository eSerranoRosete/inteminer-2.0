"use server";

import { getUsersCollection } from "./getUsersCollection";

export const getUserCount = async () => {
  const collection = await getUsersCollection();

  return collection.countDocuments();
};

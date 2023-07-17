"use server";

import { revalidatePath } from "next/cache";

import { Location } from "./LocationTypes";
import { getLocationsCollection } from "./getLocationsCollection";

export const addLocation = async (location: Omit<Location, "id">) => {
  const collection = await getLocationsCollection();

  const userDoc = {
    ...location,
    createdAt: new Date(),
  };

  const newUser = await collection.insertOne(userDoc);

  revalidatePath("/mortgage-quoter/locations");

  return newUser;
};

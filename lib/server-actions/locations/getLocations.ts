"use server";

import { getLocationsCollection } from "./getLocationsCollection";
import { Location, LocationDocument } from "./LocationTypes";

export const getLocations = async () => {
  const collection = await getLocationsCollection();

  const locations = (await collection.find({}).toArray()) as LocationDocument[];

  const data: Location[] = locations.map((location) => ({
    id: location._id.toHexString(),
    name: location.name,
    paymentOptions: location.paymentOptions,
  }));

  return data;
};

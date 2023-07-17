import clientPromise from "@/lib/mongodb";

export const getLocationsCollection = async () => {
  const client = await clientPromise;
  const db = client.db("Moduly");
  return db.collection("locations");
};

import clientPromise from "@/lib/mongodb";

export const getUsersCollection = async () => {
  const client = await clientPromise;
  const db = client.db("Moduly");
  return db.collection("users");
};

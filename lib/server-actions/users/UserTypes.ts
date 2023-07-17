import { WithId, Document } from "mongodb";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive?: boolean;
  createdAt: Date;
  updatedAt?: Date;
};
export interface UserDocument extends User, WithId<Document> {}

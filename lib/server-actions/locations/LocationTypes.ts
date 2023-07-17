import { WithId, Document } from "mongodb";

export interface LocationDocument extends WithId<Document> {}

export type Location = {
  id: string;
  name: string;
  paymentOptions: PaymentOption[];
};

export type PaymentOption = {
  id: number;
  percentage: number;
  landPrice: number;
};

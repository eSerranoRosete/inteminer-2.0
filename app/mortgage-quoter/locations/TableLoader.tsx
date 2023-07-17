"use server";
import React from "react";

import { DataTable } from "./dataTable";
import { getLocations } from "@/lib/server-actions/locations/getLocations";

export const TableLoader = async () => {
  const locations = await getLocations();

  return <DataTable data={locations} />;
};

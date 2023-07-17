import React from "react";

import { DataTableDemo } from "./dataTable";
import { getUsers } from "@/lib/server-actions/users/getUsers";

export const TableLoader = async () => {
  const users = await getUsers();

  return <DataTableDemo data={users} />;
};

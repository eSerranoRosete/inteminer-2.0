import { SuccessToast } from "@/components/toast/SuccessToast";
import {
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { User } from "@/lib/server-actions/users/UserTypes";
import { deleteUser } from "@/lib/server-actions/users/deleteUser";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import { useIsOpen } from "@/hooks/useIsOpen";
import { CardPendingLoader } from "@/components/application/CardPendingLoader";

export type Location = {
  id: string;
  name: string;
  paymentOptions: PaymentOption[];
};

type PaymentOption = {
  id: number;
  percentage: number;
  landPrice: number;
};

export const columns: ColumnDef<Location>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Location Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize ml-3">{row.getValue("name")}</div>
    ),
  },
];

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { SuccessToast } from "../toast/SuccessToast";
import { User } from "@/lib/server-actions/users/UserTypes";
import { CardPendingLoader } from "./CardPendingLoader";
import { useIsOpen } from "@/hooks/useIsOpen";
import delay from "delay";
import { addUser } from "@/lib/server-actions/users/addUser";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";

type AddUserDialogProps = {};

export const AddUserDialog = ({}: AddUserDialogProps) => {
  const [isPending, setIsPending] = useState(false);
  const { isOpen, onOpen, onClose } = useIsOpen();

  const toast = useToast();

  const submit = (e: FormData) => {
    const save = async () => {
      setIsPending(true);

      const user: Omit<User, "id" | "createdAt"> = {
        firstName: e.get("firstName") as string,
        lastName: e.get("lastName") as string,
        email: e.get("email") as string,
        isActive: e.get("isActive") === "on",
      };

      try {
        await addUser(user);
        toast.toast({
          description: <SuccessToast message="User added successfully." />,
        });
        setIsPending(false);
        onClose();
      } catch (error) {
        toast.toast({
          description: "Failed to add user. Try again later",
          variant: "destructive",
        });
        onClose();
      }
    };
    save();
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger
        onClick={onOpen}
        className={cn(
          buttonVariants({
            variant: "default",
            size: "sm",
          }),
          "gap-2 shrink-0"
        )}
      >
        <PlusCircledIcon />
        Add Member
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form action={submit}>
          <AlertDialogHeader>
            <AlertDialogTitle>Add Team Member</AlertDialogTitle>

            <div className="pt-5 grid gap-4">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input name="firstName" type="text" id="firstName" />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input name="lastName" type="text" id="lastName" />
              </div>

              <div className="grid w-full items-center gap-2">
                <Label htmlFor="email">Email</Label>
                <Input name="email" type="email" id="email" />
              </div>

              <Separator />

              <div className="w-full flex items-center space-x-6">
                <Label htmlFor="isActive">Active</Label>
                <Switch name="isActive" defaultChecked />
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-5">
            <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit" disabled={isPending}>
              Create User
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
        <CardPendingLoader isPending={isPending} />
      </AlertDialogContent>
    </AlertDialog>
  );
};

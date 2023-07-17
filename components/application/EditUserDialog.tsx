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
import { Button } from "../ui/button";

import { Pencil1Icon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { SuccessToast } from "../toast/SuccessToast";
import { User } from "@/lib/server-actions/users/UserTypes";
import { CardPendingLoader } from "./CardPendingLoader";
import { useIsOpen } from "@/hooks/useIsOpen";

import { updateUser } from "@/lib/server-actions/users/updateUser";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";

type EditUserDialogProps = {
  user: User;
};

export const EditUserDialog = ({ user }: EditUserDialogProps) => {
  const [isPending, setIsPending] = useState(false);
  const { isOpen, onOpen, onClose } = useIsOpen();

  const toast = useToast();

  const submit = (e: FormData) => {
    const save = async () => {
      setIsPending(true);

      const updatedUser: Partial<User> = {
        firstName: e.get("firstName") as string,
        lastName: e.get("lastName") as string,
        email: e.get("email") as string,
        isActive: e.get("isActive") === "on",
      };

      try {
        await updateUser({
          _id: user.id,
          user: updatedUser,
        });
        toast.toast({
          description: <SuccessToast message="User updated successfully." />,
        });
        setIsPending(false);
        onClose();
      } catch (error) {
        toast.toast({
          description: "Failed to update user. Try again later",
          variant: "destructive",
        });
        onClose();
      }
    };
    save();
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild onClick={onOpen}>
        <Button variant="ghost" size="icon">
          <Pencil1Icon className="w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form action={submit}>
          <AlertDialogHeader>
            <AlertDialogTitle>Edit Team Member</AlertDialogTitle>

            <div className="pt-5 grid gap-4">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  defaultValue={user.firstName}
                  name="firstName"
                  type="text"
                  id="firstName"
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  defaultValue={user.lastName}
                  name="lastName"
                  type="text"
                  id="lastName"
                />
              </div>

              <div className="grid w-full items-center gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  defaultValue={user.email}
                  name="email"
                  type="email"
                  id="email"
                />
              </div>

              <Separator />

              <div className="w-full flex items-center space-x-6">
                <Label htmlFor="isActive">Active</Label>
                <Switch name="isActive" defaultChecked={user.isActive} />
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-5">
            <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit" disabled={isPending}>
              Save Changes
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
        <CardPendingLoader isPending={isPending} />
      </AlertDialogContent>
    </AlertDialog>
  );
};

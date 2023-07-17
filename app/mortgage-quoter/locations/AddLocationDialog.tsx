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

import { cn } from "@/lib/utils";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { useState } from "react";

import { useIsOpen } from "@/hooks/useIsOpen";
import delay from "delay";
import { addUser } from "@/lib/server-actions/users/addUser";
import { useToast } from "@/components/ui/use-toast";
import { SuccessToast } from "@/components/toast/SuccessToast";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CardPendingLoader } from "@/components/application/CardPendingLoader";

import { Location } from "@/lib/server-actions/locations/LocationTypes";
import { addLocation } from "@/lib/server-actions/locations/addLocation";

type AddLocationDialogProps = {};

export const AddLocationDialog = ({}: AddLocationDialogProps) => {
  const [isPending, setIsPending] = useState(false);
  const { isOpen, onOpen, onClose } = useIsOpen();

  const toast = useToast();

  const submit = (e: FormData) => {
    const save = async () => {
      setIsPending(true);

      const location: Omit<Location, "id"> = {
        name: e.get("name") as string,
        paymentOptions: [],
      };

      try {
        await addLocation(location);
        toast.toast({
          description: <SuccessToast message="Location added successfully." />,
        });
        setIsPending(false);
        onClose();
      } catch (error) {
        toast.toast({
          description: "Failed to add location. Try again later",
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
        Add Location
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form action={submit}>
          <AlertDialogHeader>
            <AlertDialogTitle>Add New Location</AlertDialogTitle>

            <div className="pt-5 grid gap-4">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="name">Name</Label>
                <Input name="name" type="text" id="name" />
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-5">
            <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit" disabled={isPending}>
              Add Location
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
        <CardPendingLoader isPending={isPending} />
      </AlertDialogContent>
    </AlertDialog>
  );
};

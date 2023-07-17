import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteUser } from "@/lib/server-actions/users/deleteUser";
import { Loader2, Trash2Icon } from "lucide-react";
import { useCallback, useState } from "react";
import { useToast } from "../ui/use-toast";
import { Button, buttonVariants } from "../ui/button";
import { CardPendingLoader } from "./CardPendingLoader";
import { SuccessToast } from "../toast/SuccessToast";
import { useIsOpen } from "@/hooks/useIsOpen";

type Props = {
  userID: string;
};

export const DeleteUserDialog = ({ userID }: Props) => {
  const [isPending, setIsPending] = useState(false);
  const { isOpen, onOpen, onClose } = useIsOpen();

  const toast = useToast();

  const handleDelete = async () => {
    try {
      setIsPending(true);
      await deleteUser(userID);
      toast.toast({
        description: <SuccessToast message="User deleted successfully" />,
      });
      setIsPending(false);
      onClose();
    } catch (error) {
      toast.toast({
        description: "An error occurred while deleting the user",
        variant: "destructive",
      });
      setIsPending(false);
    }
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild onClick={onOpen}>
        <Button variant="ghost" size="icon">
          <Trash2Icon className="text-destructive w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          The user will be permanently deleted. This action cannot be undone.
        </AlertDialogDescription>
        <AlertDialogFooter className="mt-5">
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={isPending}
            className={buttonVariants({ variant: "destructive" })}
            onClick={handleDelete}
          >
            Delete User
          </AlertDialogAction>
        </AlertDialogFooter>
        <CardPendingLoader isPending={isPending} />
      </AlertDialogContent>
    </AlertDialog>
  );
};

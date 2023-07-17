import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  message: string;
};

export const SuccessToast = ({ message }: Props) => {
  return (
    <span className="flex items-center gap-2">
      <CheckCircleIcon className="w-5" />
      {message}
    </span>
  );
};

import React from "react";

type CardPendingLoaderProps = {
  isPending: boolean;
};

export const CardPendingLoader = ({ isPending }: CardPendingLoaderProps) => {
  if (!isPending) {
    return (
      <div className="w-full h-1 overflow-hidden absolute bottom-0 block" />
    );
  }

  return (
    <div className="w-full h-1 overflow-hidden animate-pulse bg-indigo-400 dark:bg-indigo-950 absolute bottom-0 block">
      <div className="w-24 relative h-full bg-indigo-900 dark:bg-indigo-500 animate-load">
        <div className="w-full h-full bg-violet-500 blur-lg" />
      </div>
    </div>
  );
};

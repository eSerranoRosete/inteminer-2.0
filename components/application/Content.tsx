import React from "react";

type ContentProps = {
  children: React.ReactNode;
};

export const Content = ({ children }: ContentProps) => {
  return (
    <div className="w-full bg-background flex rounded-3xl p-10">{children}</div>
  );
};

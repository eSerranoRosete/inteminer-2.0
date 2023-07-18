import React from "react";
import { Separator } from "../ui/separator";

type ContentProps = {
  children: React.ReactNode;
  title?: string;
};

export const Content = ({ children, title }: ContentProps) => {
  return (
    <div className="w-full bg-background flex rounded-3xl p-10">
      <div className="w-full">
        {title && (
          <>
            <header>
              <h2 className="text-3xl font-semibold mb-5">{title}</h2>
            </header>
            <Separator className="mb-5" />
          </>
        )}
        {children}
      </div>
    </div>
  );
};

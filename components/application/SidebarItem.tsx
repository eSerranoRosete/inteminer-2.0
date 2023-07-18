"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type SidebarItemProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  isChild?: boolean;
};

export const SidebarItem = ({
  href,
  icon,
  label,
  isChild,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const active = isActive(pathname, href, isChild);

  return (
    <Link
      href={href}
      className="flex relative items-center gap-2 text-sm p-4 py-3 rounded-xl -mx-3 hover:bg-indigo-950/30"
    >
      {icon}
      {label}
      {active && (
        <div className="w-full absolute h-full top-0 right-0 bg-gradient-to-l from-indigo-600/10 to-transparent">
          <div className="absolute right-0 w-1 h-full rounded-full bg-indigo-500 blur-xs z-50" />
        </div>
      )}
    </Link>
  );
};

const isActive = (pathname: string, href: string, isChild?: boolean) => {
  if (isChild) {
    return pathname.includes(href);
  }

  const rootPathname = pathname.split("/")[1];
  const rootHref = href.split("/")[1];

  return rootPathname === rootHref;
};

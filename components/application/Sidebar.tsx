import {
  Squares2X2Icon,
  UsersIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import { SidebarItem } from "./SidebarItem";

import { DotsVerticalIcon, GearIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { SidebarItemParent } from "./SidebarItemParent";
import { SignOutButton, currentUser } from "@clerk/nextjs";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

export const Sidebar = async () => {
  const user = await currentUser();

  return (
    <aside className="p-4 w-full overflow-clip max-w-xs text-zinc-100 bg-zinc-950/60 border border-zinc-900 rounded-3xl relative flex flex-col space-y-8 mr-4">
      <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 absolute -top-10 blur-3xl opacity-30 -z-10 left-0" />
      <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 absolute -bottom-32 blur-3xl opacity-30 -z-10 left-0" />
      <div className="flex items-center !mb-10 justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-700 to-pink-500" />
          <div>
            <h5 className="text-sm font-bold">
              {user?.firstName} {user?.lastName}
            </h5>
            <p className="text-xs font-medium text-muted-foreground">
              {user?.emailAddresses[0].emailAddress}
            </p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <DotsVerticalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <SignOutButton>
              <DropdownMenuItem>
                <ArrowLeftOnRectangleIcon className="w-5 mr-2" />
                Sign out
              </DropdownMenuItem>
            </SignOutButton>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <section>
        <span className="text-xs ml-2 mb-2 block font-medium text-muted-foreground">
          Overview
        </span>
        <SidebarItem
          icon={<Squares2X2Icon className="w-5" />}
          label="Dashboard"
          href="/"
        />
        <SidebarItem
          icon={<UsersIcon className="w-5" />}
          label="Team Members"
          href="/team"
        />
      </section>

      <section className="grow">
        <span className="text-xs ml-2 mb-2 block font-medium text-muted-foreground">
          Applications
        </span>
        <SidebarItem
          icon={<RectangleStackIcon className="w-5" />}
          label="Digital Cards"
          href="/digital-cards"
        />
        <SidebarItemParent />
      </section>

      <section className="justify-self-end">
        <SidebarItem
          icon={<GearIcon className="w-5" />}
          label="Settings"
          href="/settings"
        />
      </section>
    </aside>
  );
};

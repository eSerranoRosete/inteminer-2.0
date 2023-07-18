import { Content } from "@/components/application/Content";
import { Sidebar } from "@/components/application/Sidebar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

import { getUserCount } from "@/lib/server-actions/users/getUserCount";

import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Content title="Dashboard">
        <Link href="/team">
          <Suspense
            fallback={<Skeleton className="w-full max-w-xs h-24"></Skeleton>}
          >
            <UserCountCard />
          </Suspense>
        </Link>
      </Content>
    </>
  );
}

const UserCountCard = async () => {
  const count = await getUserCount();

  const available = 10;

  return (
    <Card className="max-w-xs group dark relative hover:-translate-y-1 duration-700 ease-in-out transition-transform">
      <div className="w-full h-full group-hover:bg-indigo-600 rounded-md blur-xl opacity-5 absolute top-0 right-0 -z-10" />
      <CardHeader className="space-y-1">
        <CardTitle>
          Total Users: <span className="float-right">{count}</span>
        </CardTitle>
        <CardDescription>{available - count} uses remaining.</CardDescription>
      </CardHeader>
    </Card>
  );
};

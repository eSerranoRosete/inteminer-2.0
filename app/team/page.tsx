import { Content } from "@/components/application/Content";
import { TableLoader } from "./table/TableLoader";

import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Sidebar } from "@/components/application/Sidebar";

export default function Team() {
  return (
    <>
      <Content title="Team Members">
        <Suspense
          fallback={
            <div className="space-y-4">
              <div className="flex space-x-4 h-10">
                <Skeleton className="w-full rounded-xl" />
                <Skeleton className="w-52 rounded-xl" />
              </div>
              <Skeleton className="w-full rounded-xl h-[700px]" />
            </div>
          }
        >
          <TableLoader />
        </Suspense>
      </Content>
    </>
  );
}

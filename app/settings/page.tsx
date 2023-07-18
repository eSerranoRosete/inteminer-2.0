import { Content } from "@/components/application/Content";
import { Sidebar } from "@/components/application/Sidebar";
import { ThemeToggle } from "@/components/application/ThemeToggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  return (
    <>
      <Content title="Settings">
        <Card className="max-w-xs">
          <CardHeader>
            <CardDescription>Application Configuration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between ">
              <Label>Dark Mode: </Label>
              <ThemeToggle />
            </div>
          </CardContent>
        </Card>
      </Content>
    </>
  );
}

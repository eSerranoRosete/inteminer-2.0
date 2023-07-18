import { Content } from "@/components/application/Content";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CreateUserPage() {
  return (
    <Content title="Create User">
      <Tabs defaultValue="basicInfo" className="w-full">
        <TabsList>
          <TabsTrigger value="basicInfo">Basic Info</TabsTrigger>
          <TabsTrigger value="cardContent">Card Content</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
        </TabsList>
        <TabsContent value="basicInfo">
          <div className="pt-5 grid gap-4 max-w-xl">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="firstName">User Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a value" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="org">Organization</SelectItem>
                  <SelectItem value="single">Single</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input name="firstName" type="text" id="firstName" />
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input name="lastName" type="text" id="lastName" />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="email">Email</Label>
              <Input name="email" type="email" id="email" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="cardContent">Card Content</TabsContent>
        <TabsContent value="socialLinks">Social Links</TabsContent>
      </Tabs>
    </Content>
  );
}

"use client";

import { CardPendingLoader } from "@/components/application/CardPendingLoader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth, useSignIn } from "@clerk/nextjs";

import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const auth = useAuth();
  const router = useRouter();

  const { isLoaded, setActive, signIn } = useSignIn();
  const [isPending, setIsPending] = useState(false);

  // redirect to home page if user is already signed in
  useLayoutEffect(() => {
    auth.isSignedIn && router.push("/");
  }, []);

  if (!isLoaded) {
    return null;
  }

  const submit = (e: FormData) => {
    setIsPending(true);

    const attemptLogin = async () => {
      try {
        const result = await signIn.create({
          identifier: e.get("email") as string,
          password: e.get("password") as string,
        });

        if (result.status === "complete") {
          await setActive({
            session: result.createdSessionId,
          });
          router.push("/");
        }
      } catch (error) {
        setIsPending(false);
        console.log(error);
      }
    };
    attemptLogin();
  };

  return (
    <main className="w-full flex items-center justify-center">
      <Card className="w-full max-w-md relative bg-background ">
        <CardHeader className="text-center">
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>
            Enter your information to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={submit} className="grid mt-10 gap-4">
            <Label>
              Email
              <Input
                disabled={isPending}
                type="email"
                id="email"
                name="email"
                className="mt-2"
                placeholder="Email address"
              />
            </Label>

            <Label>
              Password
              <Input
                disabled={isPending}
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                className="mt-2"
              />
            </Label>

            <Button disabled={isPending} className="mt-5">
              Sign in
            </Button>
          </form>
        </CardContent>
        <CardPendingLoader isPending={isPending} />
      </Card>
    </main>
  );
}

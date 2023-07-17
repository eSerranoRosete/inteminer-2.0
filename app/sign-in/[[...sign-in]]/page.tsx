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
          setIsPending(false);
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
    attemptLogin();
  };

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md relative bg-background/50 ">
        <div className="w-52 h-52 rounded-full bg-indigo-500/50 absolute top-0 left-0 -z-10 blur-3xl" />
        <div className="w-52 h-52 rounded-full bg-violet-500/50 absolute bottom-0 right-0 -z-10 blur-3xl" />
        <CardHeader className="text-center">
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>
            Enter your information to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={submit} className="grid gap-4">
            <Input
              disabled={isPending}
              id="email"
              name="email"
              type="email"
              className="mt-2"
              placeholder="Email address"
            />

            <Input
              disabled={isPending}
              id="password"
              name="password"
              type="password"
              className="mt-2"
              placeholder="Password"
            />

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

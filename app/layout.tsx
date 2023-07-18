import { Sidebar } from "@/components/application/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { useAppState } from "@/context/useAppContext";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={
            inter.className +
            ` dark bg-zinc-950 p-4 w-full min-h-screen flex selection:bg-violet-500 selection:text-zinc-100`
          }
        >
          <SignedIn>
            <Sidebar />
          </SignedIn>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

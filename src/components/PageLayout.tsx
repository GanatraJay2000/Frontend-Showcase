import React from "react";
import Sidebar from "./Sidebar";
import { inter as fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Maximize, Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function PageLayout({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const [sideBarOpen, setSideBarOpen] = React.useState(false);
  return (
    <div className={`relative h-screen flex bg-accent ${fontSans.className}`}>
      <Sidebar
        setSideBarOpen={setSideBarOpen}
        sideBarOpen={sideBarOpen}
        className={cn("md:py-5 md:pl-5 h-full w-72 absolute transition-all z-20", {
          "-translate-x-full md:translate-x-0": !sideBarOpen,
        })}
      />

      <div className="ml-0 md:ml-72 md:p-5 grow flex">
        <div className="grow flex bg-white md:rounded-lg shadow-sm border relative overflow-x-hidden">
          {children}

          <Button
            size="icon"
            variant="outline"
            className="md:hidden absolute left-2 top-2 z-10"
            onClick={() => setSideBarOpen(!sideBarOpen)}
          >
            <Menu />
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="absolute right-2 top-2 z-10 hidden md:flex justify-center"
          >
            <Link href={"/full-screen/" + slug}>
              <Maximize />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;

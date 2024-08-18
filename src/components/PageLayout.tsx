import React from "react";
import Sidebar from "./Sidebar";
import { inter as fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Maximize, Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useTheme } from "@/pages/_app";

function PageLayout({
  slug,
  children,
  noFullScreen = false,
}: {
  slug: string;
  children: React.ReactNode;
  noFullScreen?: boolean;
}) {
  const [sideBarOpen, setSideBarOpen] = React.useState(false);
  const pageLayout = useTheme();
  return (
    <div className={`relative h-screen flex bg-accent ${fontSans.className}`}>
      <Sidebar
        setSideBarOpen={setSideBarOpen}
        sideBarOpen={sideBarOpen}
        className={cn(
          "md:py-5 md:pl-5 h-full w-72 absolute transition-all z-20",
          {
            "-translate-x-full md:translate-x-0": !sideBarOpen,
          }
        )}
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
          {!noFullScreen && (
            <Link href={"/full-screen/" + slug}>
              <Button
                size="icon"
                variant="outline"
                className="absolute right-2 top-2 z-10 hidden md:flex justify-center"
                onClick={() => pageLayout.setLayout("full")}
              >
                <Maximize />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageLayout;

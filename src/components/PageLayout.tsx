"use client";

import React from "react";
import Sidebar from "./Sidebar";
import { inter as fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Maximize } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function PageLayout({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  return (
    <div className={` h-screen flex bg-accent ${fontSans.className}`}>
      <Sidebar className={cn("w-72")} />

      <div className=" grow m-5 flex bg-white rounded-lg shadow-sm border relative overflow-x-hidden">
        {children}

        <Button
          size="icon"
          variant="ghost"
          className="absolute right-2 top-2 z-10"
        >
          <Link href={"/full-screen/" + slug}>
            <Maximize />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default PageLayout;

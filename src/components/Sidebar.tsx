import { PanelLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { itemMap } from "@/lib/itemMap";
import { usePathname } from "next/navigation";
import { ScrollArea } from "./ui/scroll-area";

function Sidebar({ className }: { className?: string }) {
  const items = Object.values(itemMap ?? {});
  const pathname = usePathname();
  console.log(pathname.slice(1));
  const current = items.find((item) => item.slug === pathname.slice(1));
  return (
    <div
      className={cn(
        "my-5 ml-5 p-5 bg-white rounded-lg shadow-sm border",
        className
      )}
    >
      <ScrollArea>
        {items.map((item) => (
          <Button
            asChild
            variant="ghost"
            key={item.slug}
            className={cn(
              "py-2 w-full justify-start",
              current?.slug === item.slug ? "bg-secondary" : ""
            )}
          >
            <Link className="" href={item.slug}>
              {item.title}
            </Link>
          </Button>
        ))}
      </ScrollArea>
    </div>
  );
}

export default Sidebar;

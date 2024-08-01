import { X } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { itemMap } from "@/lib/itemMap";
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";
import SidebarClose from "./SidebarClose";
import { spaceGrotesk as fontSans } from "@/lib/fonts";
function Sidebar({
  className,
  setSideBarOpen,
  sideBarOpen,
}: {
  className?: string;
  setSideBarOpen: (open: boolean) => void;
  sideBarOpen: boolean;
}) {
  const items = Object.values(itemMap ?? {});
  const pathname = usePathname();
  const current = items.find((item) => item.slug === pathname?.slice(1));
  return (
    <div className={cn(`${fontSans.className}`, className)}>
      <div className="bg-white rounded-tr-lg rounded-br-lg md:rounded-lg shadow-sm border w-full h-full p-5">
        <SidebarClose sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />

        {items.map((item) => (
          <SidebarItem
            key={item.slug}
            item={item}
            current={current?.slug === item.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

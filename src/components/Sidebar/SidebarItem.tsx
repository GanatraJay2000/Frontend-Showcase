import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { inter } from "@/lib/fonts";
import { ItemType } from "@/lib/itemMap";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Ellipsis } from "lucide-react";
import Link from "next/link";

function SidebarItem({ item, current }: { item: ItemType; current: Boolean }) {
  return (
    <Button
      variant="ghost"
      key={item.slug}
      className={cn(
        "p-0 !w-full justify-start overflow-hidden relative group",
        current ? " bg-secondary " : ""
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute top-0 left-0 w-full h-full bg-gradient-to-l to-transparent to-30% via-transparent via-10% from-white z-10 from-5% group-hover:from-accent group-hover:from-15% group-hover:via-20%",
          current ? "from-secondary from-15% via-20%" : ""
        )}
      >
        <Popover>
          <TooltipProvider>
            <Tooltip>
              <PopoverTrigger asChild className="absolute">
                <TooltipTrigger asChild>
                  <Ellipsis
                    className={cn(
                      "px-1 h-10 py-3 pointer-events-auto invisible group-hover:visible absolute right-2 top-1/2 -translate-y-1/2",
                      current ? "visible" : ""
                    )}
                  />
                </TooltipTrigger>
              </PopoverTrigger>

              <TooltipContent className="bg-black text-white">
                <p>Options</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <PopoverContent
            className={`absolute left-0 w-max p-0 text-sm ${inter.className}`}
          >
            <Link
              className="block w-full py-2 px-4"
              href={`/full-screen/${item.slug}`}
            >
              Full Screen
            </Link>
          </PopoverContent>
        </Popover>
      </div>
      <Link
        className="w-full text-left h-full flex items-center px-4 py-2"
        href={item.slug}
      >
        {item.title}
      </Link>
    </Button>
  );
}


export default SidebarItem;
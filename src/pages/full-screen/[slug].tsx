import { inter } from "@/lib/fonts";
import React from "react";
import { useParams } from "next/navigation";
import { itemMap } from "@/lib/itemMap";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Minimize } from "lucide-react";

function FullScreen() {
  const params = useParams<{ slug: string }>();
  const item = itemMap[params?.slug] ?? "Not found! Go Back";

  return (
    <div className={`min-h-screen flex  ${inter.className}`}>
      <Button
        size="icon"
        variant="outline"
        className="fixed right-2 top-2 z-10"
      >
        <Link href={"/" + params?.slug ?? ""}>
          <Minimize />
        </Link>
      </Button>
      {item.component}
    </div>
  );
}

export default FullScreen;

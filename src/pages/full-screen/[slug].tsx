import { inter } from "@/lib/fonts";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { itemMap } from "@/lib/itemMap";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Minimize } from "lucide-react";
import { useTheme } from "../_app";

function FullScreen() {
  const params = useParams<{ slug: string }>();
  const item = itemMap[params?.slug] ?? "Not found! Go Back";
  const { setLayout } = useTheme();

  useEffect(() => {
    setLayout("full");
  }, []);

  return (
    <div className={`min-h-screen flex ${inter.className}`}>
      <Link href={"/" + params?.slug ?? ""}>
        <Button
          size="icon"
          variant="outline"
          className="fixed right-2 top-2 z-10"
          onClick={() => setLayout("sidebar")}
        >
          <Minimize />
        </Button>
      </Link>
      {item.component}
    </div>
  );
}

export default FullScreen;

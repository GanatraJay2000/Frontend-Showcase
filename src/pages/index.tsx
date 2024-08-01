import PageLayout from "@/components/PageLayout";
import { itemMap } from "@/lib/itemMap";
import { useEffect } from "react";
import { toast } from "sonner"
export default function Home() {
  useEffect(() => {
    toast("Development in progress!");
  }, []);
  const item = Object.values(itemMap)[0];
  return <PageLayout slug={item.slug}>{item.component}</PageLayout>;
}

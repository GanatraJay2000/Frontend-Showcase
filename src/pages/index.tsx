import PageLayout from "@/components/PageLayout";
import { itemMap } from "@/lib/itemMap";
import { useEffect } from "react";
import { toast } from "sonner";
import { useTheme } from "./_app";
export default function Home() {
  useEffect(() => {
    toast("Development in progress!");
  }, []);
  const item = Object.values(itemMap)[0];
  const { setLayout } = useTheme();
  useEffect(() => {
    setLayout("sidebar");
  }, []);

  return <PageLayout slug={item.slug}>{item.component}</PageLayout>;
}

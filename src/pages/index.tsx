import PageLayout from "@/components/PageLayout";
import { itemMap } from "@/lib/itemMap";

export default function Home() {
  const item = Object.values(itemMap)[0];
  return <PageLayout slug={item.slug}>{item.component}</PageLayout>;
}

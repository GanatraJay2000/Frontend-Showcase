import PageLayout from "@/components/PageLayout";
import React from "react";
import { useParams } from "next/navigation";
import { itemMap } from "@/lib/itemMap";
import Head from "next/head";

function Pen() {
  const params = useParams<{ pen: string }>();
  const item = itemMap[params?.pen];
  return (
    <PageLayout slug={params?.pen} noFullScreen={item?.noFullScreen}>
       <Head>
        <title>Jay Ganatra | Frontend Show | {item?.title}</title>
      </Head>
      {item?.component}
    </PageLayout>
  );
}

export default Pen;

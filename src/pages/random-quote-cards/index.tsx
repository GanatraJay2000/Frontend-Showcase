import PageLayout from "@/components/PageLayout";
import React from "react";
import RandomQuoteCards from "./RandomQuoteCards";
import Head from "next/head";

function PricingCardsPage() {
  return (
    <PageLayout slug="random-quote-cards">
      <Head>
        <title>Jay Ganatra | Frontend Show | Random Quotes Card</title>
      </Head>
      <RandomQuoteCards />
    </PageLayout>
  );
}

export default PricingCardsPage;

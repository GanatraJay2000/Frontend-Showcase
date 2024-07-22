import PageLayout from "@/components/PageLayout";
import React from "react";
import RandomQuoteCards from "./RandomQuoteCards";

function PricingCardsPage() {
  return (
    <PageLayout slug="pricing-cards">
      <RandomQuoteCards />
    </PageLayout>
  );
}

export default PricingCardsPage;

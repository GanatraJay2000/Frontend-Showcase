import RandomQuoteCards from "@/pages/random-quote-cards/RandomQuoteCards";
import PricingCards from "@/pages/pricing-cards/PricingCards";

interface IMap {
  [key: string]: {
    component: JSX.Element;
    title: string;
    slug: string;
  };
}

export const itemMap: IMap = {
  "random-quote-cards": {
    component: <RandomQuoteCards />,
    title: "Random Quote Cards",
    slug: "random-quote-cards",
  },
  "pricing-cards": {
    component: <PricingCards />,
    title: "Pricing Cards",
    slug: "pricing-cards",
  },
};

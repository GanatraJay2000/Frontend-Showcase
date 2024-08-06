import Item from "@/pages/[pen]/Item"
import RandomQuoteCards from "@/slices/RandomQuoteCards"
import SignUpPage from "@/slices/daily-ui-001";
import CreditCardCheckout from "@/slices/daily-ui-002";

interface IMap {
  [key: string]: {
    component: JSX.Element;
    title: string;
    slug: string;
    noFullScreen?: boolean;
  };
}


export const itemMap: IMap = {
  "random-quote-cards": {
    component: <RandomQuoteCards />,
    title: "Random Quote Cards",
    slug: "random-quote-cards",
  },
  "pendulum-wave": {
    component: <Item pen="eYwvLPW" />,
    title: "CSS Challenges 31 - Pendulum Wave",
    slug: "pendulum-wave",
    noFullScreen: true,
  },
  "hamburger-menu": {
    component: <Item pen="eYwvQam" />,
    title: "CSS Challenges 30 - Hamburger Menu",
    slug: "hamburger-menu",
    noFullScreen: true,
  },
  "daily-ui-001": {
    component: <SignUpPage />,
    title: "Daily UI 001 - Sign Up",
    slug: "daily-ui-001",
  },
  "daily-ui-002": {
    component: <CreditCardCheckout />,
    title: "Daily UI 002 - Credit Card Checkout",
    slug: "daily-ui-002",
  },
};

export type ItemType = (typeof itemMap)[keyof typeof itemMap];

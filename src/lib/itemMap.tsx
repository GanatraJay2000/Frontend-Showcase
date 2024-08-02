import Item from "@/pages/[pen]/Item"
import RandomQuoteCards from "@/pages/random-quote-cards/RandomQuoteCards"

interface IMap {
  [key: string]: {
    component: JSX.Element;
    title: string;
    slug: string;
    noFullScreen?: boolean;
  };
}

export const penBaseURL = "https://codepen.io/GanatraJay/embed/";

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
};

export type ItemType = (typeof itemMap)[keyof typeof itemMap];

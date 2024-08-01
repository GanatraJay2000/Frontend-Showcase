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

export const itemMap: IMap = {
  "random-quote-cards": {
    component: <RandomQuoteCards />,
    title: "Random Quote Cards",
    slug: "random-quote-cards",
  },
  "pendulum-wave": {
    component: <Item penURL="https://codepen.io/GanatraJay/embed/eYwvLPW" />,
    title: "CSS Challenges 31 - Pendulum Wave",
    slug: "pendulum-wave",
    noFullScreen: true,
  },
};

export type ItemType = (typeof itemMap)[keyof typeof itemMap];

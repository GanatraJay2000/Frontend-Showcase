import Item from "@/pages/[pen]/Item";
import RandomQuoteCards from "@/slices/RandomQuoteCards";
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
  "pendulum-wave": {
    component: <Item pen="eYwvLPW" />,
    title: "CSS Challenges 31 - Pendulum Wave",
    slug: "pendulum-wave",
    noFullScreen: true,
  },
  "random-quote-cards": {
    component: <RandomQuoteCards />,
    title: "Random Quote Cards",
    slug: "random-quote-cards",
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
  "3D-cube": {
    component: <Item pen="vYqdOMe" />,
    title: "CSS Challenges 48 - 3D Cube",
    slug: "3D-cube",
    noFullScreen: true,
  },
  "slider-with-buttons": {
    component: <Item pen="xxoYyLK" />,
    title: "CSS Challenges 19 - Slider with buttons",
    slug: "slider-with-buttons",
    noFullScreen: true,
  },
  "range-slider": {
    component: <Item pen="XWLqdOG" />,
    title: "CSS Challenges 53 - Range Slider",
    slug: "range-slider",
    noFullScreen: true,
  },
  "sparkle-checkbox": {
    component: <Item pen="vYqvEGB" />,
    title: "CSS Challenges 66 - Sparkle Checkbox",
    slug: "sparkle-checkbox",
    noFullScreen: true,
  },
  "gsap-grid-rotating-stars": {
    component: <Item pen="BagMOGL" />,
    title: "GSAP GRID RECREATION - ROTATING STARS",
    slug: "gsap-grid-rotating-stars",
    noFullScreen: true,
  },
  "gsap-grid-following-eyes": {
    component: <Item pen="WNVeogb" />,
    title: "GSAP GRID RECREATION - FOLLOWING EYES",
    slug: "gsap-grid-following-eyes",
    noFullScreen: true,
  },
  "jumping-ball": {
    component: <Item pen="xxvKRBY" />,
    title: "CSS Challenges 81 - Range Slider",
    slug: "jumping-ball",
    noFullScreen: true,
  },
};

export type ItemType = (typeof itemMap)[keyof typeof itemMap];
